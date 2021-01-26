package character.creator.model;

import java.io.*;
import java.net.URL;
import java.util.stream.Stream;

import com.itextpdf.text.pdf.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.util.ResourceUtils;


public class DnDCharacterPDFGenerator {


    private static Logger logger = LoggerFactory.getLogger(DnDCharacterPDFGenerator.class);

    public static ByteArrayInputStream CharacterPDF(DnDCharacter dnDCharacter) {
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();





        try {

            PdfWriter writer = PdfWriter.getInstance(document, out);

            document.open();
            document.newPage();

            FileInputStream template = new FileInputStream("C:/Users/br64125/Documents/workspace-spring-tool-suite-4-4.8.1.RELEASE/DnD-Character-Creator/Character-Creator-backend/src/main/resources/templates/characterSheet.pdf");

            PdfReader reader = new PdfReader(template);

            PdfImportedPage page1 = writer.getImportedPage(reader, 1);
            PdfImportedPage page2 = writer.getImportedPage(reader, 2);
            PdfImportedPage page3 = writer.getImportedPage(reader, 3);

            //Page 1
            PdfContentByte cb1 = writer.getDirectContent();
            cb1.addTemplate(page1, 0, 0);

            //Page 2
            document.newPage();
            PdfContentByte cb2 = writer.getDirectContent();
            cb2.addTemplate(page2, 0, 0);

            //Page 3
            document.newPage();
            PdfContentByte cb3 = writer.getDirectContent();
            cb3.addTemplate(page3, 0, 0);

            
            // Add Text to PDF file ->
            Font font = FontFactory.getFont(FontFactory.COURIER, 14, BaseColor.BLACK);

            PdfPTable table = new PdfPTable(3);


            PdfPCell idCell = new PdfPCell(new Phrase(dnDCharacter.getBond()));
            idCell.setPaddingLeft(4);
            idCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
            idCell.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(idCell);

            PdfPCell characterNameCell = new PdfPCell(new Phrase(dnDCharacter.getCharacterName()));
            characterNameCell.setPaddingLeft(4);
            characterNameCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
            characterNameCell.setHorizontalAlignment(Element.ALIGN_LEFT);
            table.addCell(characterNameCell);

            PdfPCell classCell = new PdfPCell(new Phrase(String.valueOf(dnDCharacter.getAlignment())));
            classCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
            classCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            classCell.setPaddingRight(4);
            table.addCell(classCell);

            document.add(table);

            document.close();

        } catch(DocumentException e) {
            logger.error(e.toString());
        } catch (FileNotFoundException e) {
            System.out.println("file not found");
        } catch (IOException e) {
            System.out.println("IOException");
        }
        return new ByteArrayInputStream(out.toByteArray());
    }
}


