package character.creator.repository;

import character.creator.model.Equipment;
import org.springframework.data.repository.CrudRepository;

public interface EquipmentRepository extends CrudRepository<Equipment, Long> {
}
