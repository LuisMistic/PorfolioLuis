package com.portfolio.mgb.Controller;


import com.portfolio.mgb.Entity.Home;
import com.portfolio.mgb.Interface.IHomeService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;




@RestController
@CrossOrigin(origins="http://localhost:4200")

public class HomeControler {
    @Autowired IHomeService ihomeService;
    
    @GetMapping("home/traer")
    public List <Home> getHome(){
        return ihomeService.getHome();
            
    }
    
    @PostMapping ("/home/crear")
    public String createHome(@RequestBody Home home) {
    ihomeService.saveHome(home);
    return "la Persona fue creada corretamente";
    }
    
    @DeleteMapping("/home/borrar/{id})")
    public String deleteHome(@PathVariable Long id){
    ihomeService.deleteHome(id);
    return "La persona fue eliminada correctamente";
    }
    @PutMapping ("/home/editar/{id}")
    public Home editHome(@PathVariable Long id,
          @RequestParam("nombre") String nuevoNombre,  
          @RequestParam("apellido") String nuevoApellido,
          @RequestParam("nombre") String nuevoImg){
        
        Home home = ihomeService.findHome(id);
        home.setNombre(nuevoNombre);
        home.setApellido(nuevoApellido);
        home.setImg(nuevoImg);
        
        ihomeService.saveHome(home);
        return home;
    }
    
}
