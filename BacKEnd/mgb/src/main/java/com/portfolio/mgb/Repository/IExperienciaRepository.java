
package com.portfolio.mgb.Repository;

import com.portfolio.mgb.Entity.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository 
public interface IExperienciaRepository extends JpaRepository<Experiencia, Long>{
    
}
