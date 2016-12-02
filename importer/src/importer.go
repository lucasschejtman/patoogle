package main

import (
	"encoding/xml"
	"flag"
	"fmt"
	"os"
)

var xmlFeed = flag.String("xmlFeed", "./ipg160105.xml", "input file path")

type US_Patent_Grant struct {
	Status                 string `xml:"status,attr"`
	BibliographicDataGrant struct {
		ApplicationReference struct {
			DocumentId struct {
				DocNumber string `xml:"doc-number"`
			} `xml:"document-id"`
		} `xml:"publication-reference"`
		Assignees struct {
			Assignee []struct {
				AddressBook struct {
					OrgName string `xml:"orgname"`
				} `xml:"addressbook"`
			} `xml:"assignee"`
		} `xml:"assignees"`
	} `xml:"us-bibliographic-data-grant"`
	Claims struct {
		Claim []struct {
			Id  string `xml:"id,attr"`
			Num string `xml:"num,attr"`
		} `xml:"claim"`
	} `xml:"claims"`
}

func main() {
	flag.Parse()

	xmlFile, err := os.Open(*xmlFeed)
	if err != nil {
		fmt.Println("Error opening file:", err)
	}
	defer xmlFile.Close()

	total := 0
	decoder := xml.NewDecoder(xmlFile)
	var inElement string
	for {
		t, _ := decoder.Token()
		if t == nil {
			break
		}

		switch se := t.(type) {
		case xml.StartElement:
			inElement = se.Name.Local

			if inElement == "us-patent-grant" {
				var p US_Patent_Grant

				decoder.DecodeElement(&p, &se)

				fmt.Println(p)

				total++
			}
		default:
		}
	}

	fmt.Printf("Total: %d", total)
}
