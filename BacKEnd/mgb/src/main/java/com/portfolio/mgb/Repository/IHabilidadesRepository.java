
package com.portfolio.mgb.Repository;

import com.portfolio.mgb.Entity.Habilidades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IHabilidadesRepository extends JpaRepository<Habilidades, Long>{
    
    
}
