package character.creator.repository.securityRepository;

import character.creator.model.securityModel.ERole;
import character.creator.model.securityModel.Role;
import character.creator.model.securityModel.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RoleRepository extends CrudRepository<Role, Long> {

    Optional<Role> findByName(ERole name);
}



