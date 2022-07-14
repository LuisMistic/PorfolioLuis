package com.portfolio.mgb.Controller;

import com.portfolio.mgb.Entity.Habilidades;
import com.portfolio.mgb.Interface.IHabilidadesService;
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
@CrossOrigin(origins = "http://localhost:4200")
public class HabilidadesControler {

    @Autowired
    IHabilidadesService ihabilidadesService;

    @GetMapping("habilidades/traer")
    public List<Habilidades> getHabilidades() {
        return ihabilidadesService.getHabilidades();

    }

    @PostMapping("/habilidades/crear")
    public String createHabilidades(@RequestBody Habilidades habilidades) {
        ihabilidadesService.saveHabilidades(habilidades);
        return "la Persona fue creada corretamente";
    }

    @DeleteMapping("/habilidades/borrar/{id})")
    public String deleteHabilidades(@PathVariable Long id) {
        ihabilidadesService.deleteHabilidades(id);
        return "La persona fue eliminada correctamente";
    }

    @PutMapping("/habilidades/editar/{id}")
    public Habilidades editHabilidades(@PathVariable("id") long id, @RequestBody Habilidades habilidades) {
        habilidades.setId(id);
        ihabilidadesService.saveHabilidades(habilidades);
        return habilidades;
    }

}
