package character.creator.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Equipment {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;

    private String type;
    private String subtype;
    private String name;
    private Double cost;
    private String damage;
    private String damageType;
    private Integer armorClass;
    private Integer requiredStrength;
    private Boolean stealthDisadvantage;
    private Double weight;
    private String properties;
}
