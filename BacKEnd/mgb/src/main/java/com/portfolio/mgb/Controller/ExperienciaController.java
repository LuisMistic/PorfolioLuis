package com.portfolio.mgb.Controller;

import com.portfolio.mgb.Entity.Experiencia;
import com.portfolio.mgb.Entity.Persona;
import com.portfolio.mgb.Interface.IExperienciaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class ExperienciaController {

    @Autowired
    IExperienciaService iexperienciaService;

    @GetMapping("experiencia/traer")
    public List<Experiencia> getExperiencia() {
        return iexperienciaService.getExperiencia();

    }

    @PostMapping("/experiencia/crear")
    public void createExperiencia(@RequestBody Experiencia experiencia) {
        iexperienciaService.saveExperiencia(experiencia);

    }

    @DeleteMapping("/experiencia/borrar/{id}")
    public void deleteExperiencia(@PathVariable Long id) {
        iexperienciaService.deleteExperiencia(id);
        
    }

    @PutMapping("/experiencia/editar/{id}")
    public Experiencia editExperiencia(@PathVariable("id") Long id, @RequestBody Experiencia experiencia) {
        experiencia.setId(id);
        iexperienciaService.saveExperiencia(experiencia);
        return experiencia;
    }

    @GetMapping(path = {"/experiencia/{id}"})
    public Experiencia findExperiencia(@PathVariable("id") Long id) {
        return iexperienciaService.findExperiencia(id);
    }
}
