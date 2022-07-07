
package com.portfolio.mgb.Service;

import com.portfolio.mgb.Entity.Home;
import com.portfolio.mgb.Interface.IHomeService;
import com.portfolio.mgb.Repository.IHomeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpHomeService implements IHomeService {
    
    @Autowired IHomeRepository ihomeRepository;
    
    
    
    public List<Home> getHome() {
        List<Home> home = ihomeRepository.findAll();
        return home;
                
    }

    @Override
    public void saveHome(Home home) {
       ihomeRepository.save(home);
    }

    @Override
    public void deleteHome(Long id) {
       ihomeRepository.deleteById(id);
    }

    @Override
    public Home findHome(Long id) {
        Home home = ihomeRepository.findById(id).orElse(null);
        return home;
    }
}
