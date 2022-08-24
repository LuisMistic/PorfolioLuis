
package com.portfolio.Luis.security.jwt;

import com.portfolio.Luis.security.entity.UsuarioPrincipal;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import java.util.logging.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;


@Component
public class JwtProvider {
    private final static Logger logger = (Logger) LoggerFactory.getLogger(JwtProvider.class);
    
    @Value("${jwt.expiration}")
    private String secret;
    private int expiration;
    
    public String generateToken(Authentication authentication){
     UsuarioPrincipal usuarioPrincipal = (UsuarioPrincipal) authentication.getPrincipal();
     
     return Jwts.builder().setSubject(usuarioPrincipal.getUsername())
     .setExpiration(new Date(new Date().getTime( )+ expiration * 1000))
     .signWith(SignatureAlgorithm.HS512, secret)
     .compact();
    }
    
    public String getNombreUsuarioFromToken(String token){
    return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    
    }
    
    public boolean validateToken(String token){
     try {
     
     }catch (MalformedJwtException e){
      logger.error("token mal formado");
       }catch (MalformedJwtException e){
      logger.error("token mal formado");
       }catch (MalformedJwtException e){
      logger.error("token mal formado");
       }catch (MalformedJwtException e){
      logger.error("token mal formado");
       }catch (MalformedJwtException e){
      logger.error("token mal formado");
     }
    }
}
