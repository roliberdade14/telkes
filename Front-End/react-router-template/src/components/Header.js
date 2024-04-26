import { useNavigate } from "react-router-dom";
import { goToHome, goToProfile } from "../routes/coordinator";
import {StyledHeader, StyledButton} from "../style"


function Header() {

  const navigate = useNavigate()

  return (
    <StyledHeader>
      <StyledButton onClick={()=>goToHome(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={()=>goToProfile(navigate, 'Juliana')}>
        Ir para página de perfil
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
