
package com.portfolio.Luis.security.repository;


import com.portfolio.Luis.security.entity.Usuario;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

 public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{
    Optional<Usuario> FindByNombreUsuario(String nombreUsuario);
    boolean existsByNombreUsuario(String nombreUsuario);
    boolean existsByEmail(String email);
    
}
