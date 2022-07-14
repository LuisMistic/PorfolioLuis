
package com.portfolio.mgb.Service;

import com.portfolio.mgb.Entity.Habilidades;
import com.portfolio.mgb.Interface.IHabilidadesService;
import com.portfolio.mgb.Repository.IHabilidadesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ImpHabilidadesService implements IHabilidadesService{
    
    @Autowired IHabilidadesRepository ihabilidadesRepository;
    
    
    
    public List<Habilidades> getHabilidades() {
        List<Habilidades> habilidades = ihabilidadesRepository.findAll();
        return habilidades;
                
    }

    @Override
    public void saveHabilidades(Habilidades habilidades) {
       ihabilidadesRepository.save(habilidades);
    }

    @Override
    public void deleteHabilidades(Long id) {
       ihabilidadesRepository.deleteById(id);
    }

    @Override
    public Habilidades findHabilidades(Long id) {
        Habilidades habilidades = ihabilidadesRepository.findById(id).orElse(null);
        return habilidades;
    }
}
