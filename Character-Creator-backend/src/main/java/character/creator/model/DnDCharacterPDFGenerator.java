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
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


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
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, strengthRect)
                .add(strength);

        Paragraph strengthModifier = new Paragraph(dnDCharacter.getStrengthModifier() + "").setFont(font).setFontSize(12).setTextAlignment(TextAlignment.CENTER);
        Rectangle strengthModifierRect = new Rectangle(50, 594, 15, 15);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, strengthModifierRect)
                .add(strengthModifier);

        Paragraph dexterity = new Paragraph(dnDCharacter.getDexterity() + "").setFont(font).setFontSize(22).setTextAlignment(TextAlignment.CENTER);
        Rectangle dexterityRect = new Rectangle(39, 533, 35, 35);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, dexterityRect)
                .add(dexterity);

        Paragraph dexterityModifier = new Paragraph(dnDCharacter.getDexterityModifier() + "").setFont(font).setFontSize(12).setTextAlignment(TextAlignment.CENTER);
        Rectangle dexterityModifierRect = new Rectangle(50, 522, 15, 15);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, dexterityModifierRect)
                .add(dexterityModifier);

        Paragraph constitution = new Paragraph(dnDCharacter.getConstitution() + "").setFont(font).setFontSize(22).setTextAlignment(TextAlignment.CENTER);
        Rectangle constitutionRect = new Rectangle(39, 461, 35, 35);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, constitutionRect)
                .add(constitution);

        Paragraph constitutionModifier = new Paragraph(dnDCharacter.getConstitutionModifier() + "").setFont(font).setFontSize(12).setTextAlignment(TextAlignment.CENTER);
        Rectangle constitutionModifierRect = new Rectangle(50, 450, 15, 15);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, constitutionModifierRect)
                .add(constitutionModifier);

        Paragraph intelligence = new Paragraph(dnDCharacter.getIntelligence() + "").setFont(font).setFontSize(22).setTextAlignment(TextAlignment.CENTER);
        Rectangle intelligenceRect = new Rectangle(39, 389, 35, 35);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, intelligenceRect)
                .add(intelligence);

        Paragraph intelligenceModifier = new Paragraph(dnDCharacter.getIntelligenceModifier() + "").setFont(font).setFontSize(12).setTextAlignment(TextAlignment.CENTER);
        Rectangle intelligenceModifierRect = new Rectangle(50, 378, 15, 15);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, intelligenceModifierRect)
                .add(intelligenceModifier);

        Paragraph wisdom = new Paragraph(dnDCharacter.getWisdom() + "").setFont(font).setFontSize(22).setTextAlignment(TextAlignment.CENTER);
        Rectangle wisdomRect = new Rectangle(39, 317, 35, 35);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, wisdomRect)
                .add(wisdom);

        Paragraph wisdomModifier = new Paragraph(dnDCharacter.getWisdomModifier() + "").setFont(font).setFontSize(12).setTextAlignment(TextAlignment.CENTER);
        Rectangle wisdomModifierRect = new Rectangle(50, 306, 15, 15);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, wisdomModifierRect)
                .add(wisdomModifier);

        Paragraph charisma = new Paragraph(dnDCharacter.getCharisma() + "").setFont(font).setFontSize(22).setTextAlignment(TextAlignment.CENTER);
        Rectangle charismaRect = new Rectangle(39, 245, 35, 35);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, charismaRect)
                .add(charisma);

        Paragraph charismaModifier = new Paragraph(dnDCharacter.getCharismaModifier() + "").setFont(font).setFontSize(12).setTextAlignment(TextAlignment.CENTER);
        Rectangle charismaModifierRect = new Rectangle(50, 234, 15, 15);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, charismaModifierRect)
                .add(charismaModifier);

//      ________________other_____________
        Paragraph proficiencyBonus = new Paragraph(dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
        Rectangle proficiencyBonusRect = new Rectangle(99, 606, 20, 20);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, proficiencyBonusRect)
                .add(proficiencyBonus);

        Paragraph passivePerception = new Paragraph(dnDCharacter.getPassivePerception() + "").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
        Rectangle passivePerceptionRect = new Rectangle(32, 185, 20, 20);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, passivePerceptionRect)
                .add(passivePerception);


//      ________________skills_____________
        List<String> proficiencies = new ArrayList<>();
        for(Proficiency skill: dnDCharacter.getSkills()) {
            proficiencies.add(skill.getName());
        }

        if (proficiencies.contains("Acrobatics")) {
            Paragraph acrobatics = new Paragraph(dnDCharacter.getDexterityModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle acrobaticsRect = new Rectangle(111, 461, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, acrobaticsRect)
                    .add(acrobatics);

            Paragraph acrobaticsProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle acrobaticsProfRect = new Rectangle(94, 457, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, acrobaticsProfRect)
                    .add(acrobaticsProf);
        } else {
            Paragraph acrobatics = new Paragraph(dnDCharacter.getDexterityModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle acrobaticsRect = new Rectangle(111, 461, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, acrobaticsRect)
                    .add(acrobatics);
        }

        if (proficiencies.contains("Animal Handling")) {
            Paragraph animalHandling = new Paragraph(dnDCharacter.getWisdomModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle animalHandlingRect = new Rectangle(111, 447, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, animalHandlingRect)
                    .add(animalHandling);

            Paragraph animalHandlingProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle animalHandlingProfRect = new Rectangle(94, 443, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, animalHandlingProfRect)
                    .add(animalHandlingProf);
        } else {
            Paragraph animalHandling = new Paragraph(dnDCharacter.getWisdomModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle animalHandlingRect = new Rectangle(111, 447, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, animalHandlingRect)
                    .add(animalHandling);
        }

        if (proficiencies.contains("Arcana")) {
            Paragraph arcana = new Paragraph(dnDCharacter.getIntelligenceModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle arcanaRect = new Rectangle(111, 433, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, arcanaRect)
                    .add(arcana);

            Paragraph arcanaProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle arcanaProfRect = new Rectangle(94, 430, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, arcanaProfRect)
                    .add(arcanaProf);
        } else {
            Paragraph arcana = new Paragraph(dnDCharacter.getIntelligenceModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle arcanaRect = new Rectangle(111, 433, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, arcanaRect)
                    .add(arcana);
        }

        if (proficiencies.contains("Athletics")) {
            Paragraph athletics = new Paragraph(dnDCharacter.getStrengthModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle athleticsRect = new Rectangle(111, 419, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, athleticsRect)
                    .add(athletics);

            Paragraph athleticsProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle athleticsProfRect = new Rectangle(94, 416, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, athleticsProfRect)
                    .add(athleticsProf);
        } else {
            Paragraph athletics = new Paragraph(dnDCharacter.getStrengthModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle athleticsRect = new Rectangle(111, 419, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, athleticsRect)
                    .add(athletics);
        }

        if (proficiencies.contains("Deception")) {
            Paragraph deception = new Paragraph(dnDCharacter.getCharismaModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle deceptionRect = new Rectangle(111, 406, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, deceptionRect)
                    .add(deception);

            Paragraph deceptionProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle deceptionProfRect = new Rectangle(94, 402, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, deceptionProfRect)
                    .add(deceptionProf);
        } else {
            Paragraph deception = new Paragraph(dnDCharacter.getCharismaModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle deceptionRect = new Rectangle(111, 406, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, deceptionRect)
                    .add(deception);
        }

        if (proficiencies.contains("History")) {
            Paragraph history = new Paragraph(dnDCharacter.getIntelligenceModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle historyRect = new Rectangle(111, 392, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, historyRect)
                    .add(history);

            Paragraph historyProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle historyProfRect = new Rectangle(94, 389, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, historyProfRect)
                    .add(historyProf);
        } else {
            Paragraph history = new Paragraph(dnDCharacter.getIntelligenceModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle historyRect = new Rectangle(111, 392, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, historyRect)
                    .add(history);
        }

        if (proficiencies.contains("Insight")) {
            Paragraph insight = new Paragraph(dnDCharacter.getWisdomModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle insightRect = new Rectangle(111, 379, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, insightRect)
                    .add(insight);

            Paragraph insightProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle insightProfRect = new Rectangle(94, 376, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, insightProfRect)
                    .add(insightProf);
        } else {
            Paragraph insight = new Paragraph(dnDCharacter.getWisdomModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle insightRect = new Rectangle(111, 379, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, insightRect)
                    .add(insight);
        }

        if (proficiencies.contains("Intimidation")) {
            Paragraph intimidation = new Paragraph(dnDCharacter.getCharismaModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle intimidationRect = new Rectangle(111, 365, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, intimidationRect)
                    .add(intimidation);

            Paragraph intimidationProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle intimidationProfRect = new Rectangle(94, 362, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, intimidationProfRect)
                    .add(intimidationProf);
        } else {
            Paragraph intimidation = new Paragraph(dnDCharacter.getCharismaModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle intimidationRect = new Rectangle(111, 365, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, intimidationRect)
                    .add(intimidation);
        }

        if (proficiencies.contains("Investigation")) {
            Paragraph investigation = new Paragraph(dnDCharacter.getIntelligenceModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle investigationRect = new Rectangle(111, 352, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, investigationRect)
                    .add(investigation);

            Paragraph investigationProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle investigationProfRect = new Rectangle(94, 349, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, investigationProfRect)
                    .add(investigationProf);
        } else {
            Paragraph investigation = new Paragraph(dnDCharacter.getIntelligenceModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle investigationRect = new Rectangle(111, 352, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, investigationRect)
                    .add(investigation);
        }

        if (proficiencies.contains("Medicine")) {
            Paragraph medicine = new Paragraph(dnDCharacter.getWisdomModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle medicineRect = new Rectangle(111, 338, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, medicineRect)
                    .add(medicine);

            Paragraph medicineProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle medicineProfRect = new Rectangle(94, 335, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, medicineProfRect)
                    .add(medicineProf);
        } else {
            Paragraph medicine = new Paragraph(dnDCharacter.getWisdomModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle medicineRect = new Rectangle(111, 338, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, medicineRect)
                    .add(medicine);
        }

        if (proficiencies.contains("Nature")) {
            Paragraph nature = new Paragraph(dnDCharacter.getIntelligenceModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle natureRect = new Rectangle(111, 325, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, natureRect)
                    .add(nature);

            Paragraph natureProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle natureProfRect = new Rectangle(94, 322, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, natureProfRect)
                    .add(natureProf);
        } else {
            Paragraph nature = new Paragraph(dnDCharacter.getIntelligenceModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle natureRect = new Rectangle(111, 325, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, natureRect)
                    .add(nature);
        }

        if (proficiencies.contains("Perception")) {
            Paragraph perception = new Paragraph(dnDCharacter.getWisdomModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle perceptionRect = new Rectangle(111, 311, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, perceptionRect)
                    .add(perception);

            Paragraph perceptionProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle perceptionProfRect = new Rectangle(94, 308, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, perceptionProfRect)
                    .add(perceptionProf);
        } else {
            Paragraph perception = new Paragraph(dnDCharacter.getWisdomModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle perceptionRect = new Rectangle(111, 311, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, perceptionRect)
                    .add(perception);
        }

        if (proficiencies.contains("Performance")) {
            Paragraph performance = new Paragraph(dnDCharacter.getCharismaModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle performanceRect = new Rectangle(111, 297, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, performanceRect)
                    .add(performance);

            Paragraph performanceProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle performanceProfRect = new Rectangle(94, 294, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, performanceProfRect)
                    .add(performanceProf);
        } else {
            Paragraph performance = new Paragraph(dnDCharacter.getCharismaModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle performanceRect = new Rectangle(111, 297, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, performanceRect)
                    .add(performance);
        }

        if (proficiencies.contains("Persuation")) {
            Paragraph persuation = new Paragraph(dnDCharacter.getCharismaModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle persuationRect = new Rectangle(111, 284, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, persuationRect)
                    .add(persuation);

            Paragraph persuationProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle persuationProfRect = new Rectangle(94, 281, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, persuationProfRect)
                    .add(persuationProf);
        } else {
            Paragraph persuation = new Paragraph(dnDCharacter.getCharismaModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle persuationRect = new Rectangle(111, 284, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, persuationRect)
                    .add(persuation);
        }

        if (proficiencies.contains("Religion")) {
            Paragraph religion = new Paragraph(dnDCharacter.getIntelligenceModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle religionRect = new Rectangle(111, 270, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, religionRect)
                    .add(religion);

            Paragraph religionProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle religionProfRect = new Rectangle(94, 267, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, religionProfRect)
                    .add(religionProf);
        } else {
            Paragraph religion = new Paragraph(dnDCharacter.getIntelligenceModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle religionRect = new Rectangle(111, 270, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, religionRect)
                    .add(religion);
        }

        if (proficiencies.contains("Sleight of Hand")) {
            Paragraph sleight = new Paragraph(dnDCharacter.getDexterityModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle sleightRect = new Rectangle(111, 257, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, sleightRect)
                    .add(sleight);

            Paragraph sleightProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle sleightProfRect = new Rectangle(94, 254, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, sleightProfRect)
                    .add(sleightProf);
        } else {
            Paragraph sleight = new Paragraph(dnDCharacter.getDexterityModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle sleightRect = new Rectangle(111, 257, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, sleightRect)
                    .add(sleight);
        }

        if (proficiencies.contains("Stealth")) {
            Paragraph stealth = new Paragraph(dnDCharacter.getDexterityModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle stealthRect = new Rectangle(111, 243, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, stealthRect)
                    .add(stealth);

            Paragraph stealthProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle stealthProfRect = new Rectangle(94, 240, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, stealthProfRect)
                    .add(stealthProf);
        } else {
            Paragraph stealth = new Paragraph(dnDCharacter.getDexterityModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle stealthRect = new Rectangle(111, 243, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, stealthRect)
                    .add(stealth);
        }

        if (proficiencies.contains("Survival")) {
            Paragraph survival = new Paragraph(dnDCharacter.getWisdomModifier() + dnDCharacter.getProficiencyBonus() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle survivalRect = new Rectangle(111, 230, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, survivalRect)
                    .add(survival);

            Paragraph survivalProf = new Paragraph("•").setFont(font).setFontSize(15).setTextAlignment(TextAlignment.CENTER);
            Rectangle survivalProfRect = new Rectangle(94, 227, 20, 20);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, survivalProfRect)
                    .add(survivalProf);
        } else {
            Paragraph survival = new Paragraph(dnDCharacter.getWisdomModifier() + "").setFont(font).setFontSize(10).setTextAlignment(TextAlignment.CENTER);
            Rectangle survivalRect = new Rectangle(111, 230, 15, 15);
            new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, survivalRect)
                    .add(survival);
        }

//      ________________Other Proficiencies & Languages_____________

        String language = "";
        for (Language languages: dnDCharacter.getLanguages()) {
            language += languages.getLanguageName() + ", ";
        }
        language = language.substring(0, language.length()-1);

        Paragraph languages = new Paragraph("Languages: " + language).setFont(font).setFontSize(10);
        Rectangle languagesRect = new Rectangle(33, 130, 170, 40);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, languagesRect)
                .add(languages);

        List<Proficiency> profs = Stream.of(dnDCharacter.getCharacterClass().getOtherProficiencies(),
                dnDCharacter.getCharacterRace().getOtherProficiencies(),
                dnDCharacter.getCharacterSubrace().getOtherProficiencies()).flatMap(Collection::stream)
                .collect(Collectors.toList());


        String weaponsProf = "";
        String armorProf = "";
        String toolsProf = "";
        String otherProf = "";

        for (Proficiency prof: profs) {
            switch (prof.getType()) {
                case "Weapon":
                    weaponsProf += prof.getName() + ", ";
                    break;
                case "Armor":
                    armorProf += prof.getName() + ", ";
                    break;
                case "Tool":
                    toolsProf += prof.getName() + ", ";
                    break;
                default :
                    otherProf += prof.getName() + ", ";
                break;
            }
        }

        if (weaponsProf.length() > 1) weaponsProf = weaponsProf.substring(0, weaponsProf.length()-1);
        if (armorProf.length() > 1) armorProf = armorProf.substring(0, armorProf.length()-1);
        if (toolsProf.length() > 1) toolsProf = toolsProf.substring(0, toolsProf.length()-1);
        if (otherProf.length() > 1) otherProf = otherProf.substring(0, otherProf.length()-1);

        Paragraph other = new Paragraph("Other: " + otherProf).setFont(font).setFontSize(10);
        Rectangle otherRect = new Rectangle(33, 30, 170, 100);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, otherRect)
                .add(other);


//      ________________Features & Traits_____________

        Paragraph weaponTrait = new Paragraph("Weapons proficiencies: " + weaponsProf).setFont(font).setFontSize(10);
        Rectangle weaponTraitRect = new Rectangle(410, 330, 170, 80);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, weaponTraitRect)
                .add(weaponTrait);

        Paragraph armorTrait = new Paragraph("Armor proficiencies: " + armorProf).setFont(font).setFontSize(10);
        Rectangle armorTraitRect = new Rectangle(410, 230, 170, 100);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, armorTraitRect)
                .add(armorTrait);

        Paragraph toolTrait = new Paragraph("Tool proficiencies: " + toolsProf).setFont(font).setFontSize(10);
        Rectangle toolTraitRect = new Rectangle(410, 100, 170, 130);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, toolTraitRect)
                .add(toolTrait);


//      ________________Inspiration_____________

        Paragraph personalityTrait = new Paragraph(dnDCharacter.getPersonalityTrait()).setFont(font).setFontSize(9);
        Rectangle personalityTraitRect = new Rectangle(418, 595, 160, 60);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, personalityTraitRect)
                .add(personalityTrait);

        Paragraph ideal = new Paragraph(dnDCharacter.getIdeal()).setFont(font).setFontSize(9);
        Rectangle idealRect = new Rectangle(418, 540, 160, 45);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, idealRect)
                .add(ideal);

        Paragraph bond = new Paragraph(dnDCharacter.getBond()).setFont(font).setFontSize(9);
        Rectangle bondRect = new Rectangle(418, 482, 160, 50);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, bondRect)
                .add(bond);

        Paragraph flaw = new Paragraph(dnDCharacter.getFlaw()).setFont(font).setFontSize(9);
        Rectangle flawRect = new Rectangle(418, 430, 160, 45);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, flawRect)
                .add(flaw);

//      ________________Equipment_____________

        Paragraph backgroundEquipment = new Paragraph(dnDCharacter.getCharacterBackground().getBasicEquipment()).setFont(font).setFontSize(8);
        Rectangle backgroundEquipmentRect = new Rectangle(268, 125, 125, 75);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, backgroundEquipmentRect)
                .add(backgroundEquipment);

        String equipment = "";
        for (Equipment e: dnDCharacter.getEquipment()) {
            if (e.getSubtype().equals("Pack")) {
                equipment += e.getName() + " (" + e.getProperties() + "), ";
            } else {
                equipment += e.getName() + ", ";
            }
        }
        if (equipment.length() > 1) equipment = equipment.substring(0, equipment.length()-1);


        Paragraph equipmentList = new Paragraph(equipment).setFont(font).setFontSize(8);
        Rectangle equipmentListRect = new Rectangle(268, 30, 125, 100);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, equipmentListRect)
                .add(equipmentList);

        Paragraph goldPieces = new Paragraph(dnDCharacter.getCharacterBackground().getGold() + "").setFont(font).setFontSize(12);
        Rectangle goldPiecesRect = new Rectangle(237, 100, 15, 15);
        new Canvas(new PdfCanvas(pdfDoc.getPage(1)), pdfDoc, goldPiecesRect)
                .add(goldPieces);


        pdfDoc.close();
        return new ByteArrayInputStream(out.toByteArray());
    }
}


