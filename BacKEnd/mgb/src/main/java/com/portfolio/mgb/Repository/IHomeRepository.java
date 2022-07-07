
package com.portfolio.mgb.Repository;

import com.portfolio.mgb.Entity.Home;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IHomeRepository extends JpaRepository<Home, Long>{
    
}
