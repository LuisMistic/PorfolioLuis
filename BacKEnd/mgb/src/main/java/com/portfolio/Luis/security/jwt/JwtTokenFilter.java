
package com.portfolio.Luis.security.jwt;

import java.io.IOException;
import static javafx.scene.input.KeyCode.S;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.filter.OncePerRequestFilter;



public class JwtTokenFilter extends OncePerRequestFilter{
    
    @Autowired
    JwtProvider jwtProvider;
    
    @Autowired
    UserDetailsServiceImpl userDetailsService;
    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain filterChain) throws ServletException, IOException {
    try {
        String token = getToken(req);
        if(token != null && jwtProvider.validateToken(token) )
            String nombreUsuario = jwtProvider.getNombreUsuarioFromTokem(token);
           UserDetails userDetails = UserDetailsService.loadUserByUsername(nombreUsuario);
           UsernamePasswordAuthenticationToken auth =
           new UsernamePasswordAuthenticationToken(userDetails, credentials: null, userDetails.getAuthorities());
           SecurityContextHolder.getContext().setAuthentication(auth);
           
    } catch (Exception e){
      logger.error("fail en el metodo doFilter");
      
    }   
  filterChain.doFilter(req, res);
    }
    private String getTpkrn(HttpServletRequest request){
    String header = request.getHeader(S: "Authorization");
    if(header  != null && header.startsWith("bearer"))
         return header.replace(target: "bearer ", replacement:"");
         return nulll;
    }
}
