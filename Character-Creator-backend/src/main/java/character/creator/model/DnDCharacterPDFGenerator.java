package character.creator.model;

import java.io.*;

import com.itextpdf.io.font.constants.StandardFonts;
import com.itextpdf.layout.property.TextAlignment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.itextpdf.io.font.PdfEncodings;

import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.geom.Rectangle;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.PdfReader;
import com.itextpdf.kernel.pdf.canvas.PdfCanvas;

import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.Canvas;

import java.io.IOException;


public class DnDCharacterPDFGenerator {


//    private static Logger logger = LoggerFactory.getLogger(DnDCharacterPDFGenerator.class);
//    public static final String SRC = "./src/main/resources/templates/characterSheet.pdf";
//    public static final String SRC = "C:/Users/br64125/Documents/workspace-spring-tool-suite-4-4.8.1.RELEASE/DnD-Character-Creator/Character-Creator-backend/src/main/resources/templates/characterSheet.pdf";

    public static ByteArrayInputStream CharacterPDF(DnDCharacter dnDCharacter) throws IOException {


        FileInputStream src = new FileInputStream("./src/main/resources/templates/characterSheet.pdf");
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        PdfDocument pdfDoc = new PdfDocument(new PdfReader(src), new PdfWriter(out));

        PdfFont font = PdfFontFactory.createFont(StandardFonts.HELVETICA_BOLD, PdfEncodings.CP1252, true);

//      ------------------Page 1------------------

//      ________________Basic info_____________

//      characterName
        Paragraph characterName = new Paragraph(dnDCharacter.getCharacterName()).setFont(font).setFontSize(18);
        Rectangle characterNameRect = new Rectangle(55, 705, 180, 35);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, characterNameRect)
                .add(characterName);
//      characterClass
        Paragraph characterClass = new Paragraph(dnDCharacter.getCharacterClass().getClassName() + ", 1").setFont(font).setFontSize(13);
        Rectangle characterClassRect = new Rectangle(270, 725, 100, 25);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, characterClassRect)
                .add(characterClass);
//      characterBackground
        Paragraph characterBackground = new Paragraph(dnDCharacter.getCharacterBackground().getBackgroundName()).setFont(font).setFontSize(13);
        Rectangle characterBackgroundRect = new Rectangle(380, 725, 90, 25);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, characterBackgroundRect)
                .add(characterBackground);
//      playerName
        Paragraph playerName = new Paragraph("___").setFont(font).setFontSize(13);
        Rectangle playerNameRect = new Rectangle(480, 725, 90, 25);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, playerNameRect)
                .add(playerName);
//      characterRace
        Paragraph characterRace = new Paragraph(dnDCharacter.getCharacterRace().getRaceName()).setFont(font).setFontSize(13);
        Rectangle characterRaceRect = new Rectangle(270, 697, 100, 25);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, characterRaceRect)
                .add(characterRace);
//      alignment
        Paragraph alignment = new Paragraph(dnDCharacter.getAlignment().getAlignment()).setFont(font).setFontSize(13);
        Rectangle alignmentRect = new Rectangle(380, 697, 90, 25);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, alignmentRect)
                .add(alignment);
//      experiencePoints
        Paragraph experiencePoints = new Paragraph("___").setFont(font).setFontSize(13);
        Rectangle experiencePointsRect = new Rectangle(480, 697, 90, 25);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, experiencePointsRect)
                .add(experiencePoints);


//      ________________Ability modifiers_____________
        Paragraph strength = new Paragraph(dnDCharacter.getStrength() + "").setFont(font).setFontSize(22).setTextAlignment(TextAlignment.CENTER);
        Rectangle strengthRect = new Rectangle(39, 605, 35, 35);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)).rectangle(strengthRect).stroke(), pdfDoc, strengthRect)
                .add(strength);

        Paragraph strengthModifier = new Paragraph(dnDCharacter.getStrengthModifier() + "").setFont(font).setFontSize(12).setTextAlignment(TextAlignment.CENTER);
        Rectangle strengthModifierRect = new Rectangle(50, 594, 15, 15);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)).rectangle(strengthModifierRect).stroke(), pdfDoc, strengthModifierRect)
                .add(strengthModifier);

        Paragraph dexterity = new Paragraph(dnDCharacter.getDexterity() + "").setFont(font).setFontSize(22).setTextAlignment(TextAlignment.CENTER);
        Rectangle dexterityRect = new Rectangle(39, 533, 35, 35);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)).rectangle(dexterityRect).stroke(), pdfDoc, dexterityRect)
                .add(dexterity);

        Paragraph dexterityModifier = new Paragraph(dnDCharacter.getDexterityModifier() + "").setFont(font).setFontSize(12).setTextAlignment(TextAlignment.CENTER);
        Rectangle dexterityModifierRect = new Rectangle(50, 522, 15, 15);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)).rectangle(dexterityModifierRect).stroke(), pdfDoc, dexterityModifierRect)
                .add(dexterityModifier);

        Paragraph constitution = new Paragraph(dnDCharacter.getConstitution() + "").setFont(font).setFontSize(22).setTextAlignment(TextAlignment.CENTER);
        Rectangle constitutionRect = new Rectangle(39, 461, 35, 35);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)).rectangle(constitutionRect).stroke(), pdfDoc, constitutionRect)
                .add(constitution);

        Paragraph constitutionModifier = new Paragraph(dnDCharacter.getConstitutionModifier() + "").setFont(font).setFontSize(12).setTextAlignment(TextAlignment.CENTER);
        Rectangle constitutionModifierRect = new Rectangle(50, 450, 15, 15);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)).rectangle(constitutionModifierRect).stroke(), pdfDoc, constitutionModifierRect)
                .add(constitutionModifier);

        Paragraph intelligence = new Paragraph(dnDCharacter.getIntelligence() + "").setFont(font).setFontSize(22).setTextAlignment(TextAlignment.CENTER);
        Rectangle intelligenceRect = new Rectangle(39, 389, 35, 35);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)).rectangle(intelligenceRect).stroke(), pdfDoc, intelligenceRect)
                .add(intelligence);

        Paragraph intelligenceModifier = new Paragraph(dnDCharacter.getIntelligenceModifier() + "").setFont(font).setFontSize(12).setTextAlignment(TextAlignment.CENTER);
        Rectangle intelligenceModifierRect = new Rectangle(50, 378, 15, 15);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)).rectangle(intelligenceModifierRect).stroke(), pdfDoc, intelligenceModifierRect)
                .add(intelligenceModifier);

        Paragraph wisdom = new Paragraph(dnDCharacter.getWisdom() + "").setFont(font).setFontSize(22).setTextAlignment(TextAlignment.CENTER);
        Rectangle wisdomRect = new Rectangle(39, 317, 35, 35);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)).rectangle(wisdomRect).stroke(), pdfDoc, wisdomRect)
                .add(wisdom);

        Paragraph wisdomModifier = new Paragraph(dnDCharacter.getWisdomModifier() + "").setFont(font).setFontSize(12).setTextAlignment(TextAlignment.CENTER);
        Rectangle wisdomModifierRect = new Rectangle(50, 306, 15, 15);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)).rectangle(wisdomModifierRect).stroke(), pdfDoc, wisdomModifierRect)
                .add(wisdomModifier);

        Paragraph charisma = new Paragraph(dnDCharacter.getCharisma() + "").setFont(font).setFontSize(22).setTextAlignment(TextAlignment.CENTER);
        Rectangle charismaRect = new Rectangle(39, 245, 35, 35);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)).rectangle(charismaRect).stroke(), pdfDoc, charismaRect)
                .add(charisma);

        Paragraph charismaModifier = new Paragraph(dnDCharacter.getCharismaModifier() + "").setFont(font).setFontSize(12).setTextAlignment(TextAlignment.CENTER);
        Rectangle charismaModifierRect = new Rectangle(50, 234, 15, 15);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)).rectangle(charismaModifierRect).stroke(), pdfDoc, charismaModifierRect)
                .add(charismaModifier);

        pdfDoc.close();
        return new ByteArrayInputStream(out.toByteArray());
    }
}


