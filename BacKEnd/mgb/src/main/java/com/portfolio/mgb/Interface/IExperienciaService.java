
package com.portfolio.mgb.Interface;

import com.portfolio.mgb.Entity.Experiencia;
import java.util.List;


public interface IExperienciaService {
    
         public List<Experiencia> getExperiencia();
    
    public void saveExperiencia(Experiencia experiencia);
    
    
    public void deleteExperiencia (Long id);
    
    public Experiencia findExperiencia(Long id);
}
