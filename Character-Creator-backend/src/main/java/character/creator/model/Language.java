package character.creator.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Language {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    private String languageName;
    private String typicalSpeaker;
    private String script;
}
