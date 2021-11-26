function interaçoes(input) {
    // SAUDAÇÕES
    if (input == "oi" || input == "Oi" || input == "OI" || 
    input == "ola" || input == "olá" || input == "Olá" || input == "OLÁ") {
        return "Olá, como posso ajudar ?";
    } else if (input == "bom dia" || input == "Bom dia" || input == "Bom Dia") {
        return "Bom Dia! Como posso ajudar?";
    }   else if (input == "boa tarde" || input == "Boa tarde" || input == "Boa Tarde") {
        return "Boa Tarde! Como posso ajudar?";
    } else if (input == "boa noite" || input == "Boa noite" || input == "Boa Noite") {
        return "Boa Noite! Como posso ajudar?";
    }

    // AGRADECIMENTOS
    if (input == "obrigado" || input == "obrigada" || input == "Obrigado" || input == "Obrigada" || 
    input == "obrigado!" || input == "obrigada!" || input == "Obrigado!" || input == "Obrigada!" ||
    input == "muito obrigado" || input == "muito obrigada" || input == "Muito obrigado" || input == "Muito obrigada" || input == "Muito Obrigado" || input == "Muito Obrigada" || 
    input == "valeu" || input == "Valeu" || input == "valeu!" || input == "Valeu!") {
        return "Não há de que!";
    }

    // DESPEDIDAS
    if (input == "tchau" || input == "tchau!" || input == "Tchau" || input == "ate mais" || input == "Ate mais" || input == "Tchau!" || 
    input == "ate mais!" || input == "Ate mais!" || input == "até mais" || input == "Até mais" || input == "até mais!" || input == "Até mais!" || 
    input == "ate logo" || input == "ate logo!" || input == "ate logo!" || input == "Ate logo!" || input == "até logo" || input == "Até logo!") {
        return "Até logo, espero te ver novamente :)";
    }

    // FUNCIONAMENTO
    else if (input == "qual horário de funcionamento" || input == "qual horario de funcionamento" || input == "horario" || 
    input == "horário" || input == "funcionamento" || input == "horario de funcionamento" || input == "horário de funcionamento" || 
    input == "Qual horário de funcionamento" || input == "Qual horario de funcionamento" || input == "Horario" || input == "qual o horario de funcionamento" ||
    input == "qual o horario de funcionamento?" || input == "Horário" || input == "Funcionamento" || input == "Horario de funcionamento" || input == "Horário de funcionamento" || 
    input == "qual horário de funcionamento?" || input == "qual horario de funcionamento?" || input == "horario?" || input == "horário?" || 
    input == "funcionamento?" || input == "horario de funcionamento?" || input == "horário de funcionamento?" || input == "Qual horário de funcionamento?" || 
    input == "Qual horario de funcionamento?" || input == "Horario?" || input == "Horário?" || input == "Funcionamento?" || input == "Horario de funcionamento?" || 
    input == "Horário de funcionamento?" || input == "que horas abre" || input == "que horas abre?" || input == "Que horas abre" || input == "Que horas abre?") {
        return "Nosso horário de funcionamento é das 08h00 às 18h00 de Segunda à Sexta, e aos Sábados das 09h00 às 13h00";
    }

    // LOCALIZAÇÃO    
    else if (input == "Endereço" || input == "Endereco" || input == "Lugar" || input == "Localização" || input == "Localizacao" ||
    input == "Onde fica" || input == "Onde é" || input == "Onde e" || input == "qual o endereço" || input == "Qual o endereço" || 
    input == "Qual o endereco" || input == "endereço" || input == "endereco" || input == "lugar" || input == "localização" ||
    input == "onde voces ficam" || input == "onde vocês ficam" || input == "Onde voces ficam" || input == "Onde vocês ficam" ||
    input == "Onde voces ficam?" || input == "Onde vocês ficam?" || input == "onde fica a loja" || input == "onde fica a loja?" ||
    input == "qual a localizacao" || input == "Qual a localizacao" || input == "qual a localização" || input == "Qual a localização" ||
    input == "localizacao" || input == "onde fica" ||  input == "localizaçao" || input == "onde é" || input == "onde e" || input == "Endereço?" || input == "Endereco?" ||
    input == "Lugar?" || input == "Localização?" || input == "Localizacao?" || input == "Onde fica?" || input == "Onde é?" || input == "Onde e?" ||
    input == "Qual o endereço?" || input == "Qual o endereco?" || input == "endereço?" || input == "endereco?" || input == "qual a localizacao?" ||
    input == "qual a localizaçao?" || input == "Qual a localizacao?" || input == "Qual a localizaçao?" || input == "qual a localização?" || 
    input == "lugar?" || input == "localização?" || input == "localizacao?" || input == "onde fica?" || input == "onde é?" || input == "onde e?") {
        return "Ficamos na Rua XYZ, 123 - Uninove - Barra Funda, São Paulo";
    }

    // CONTATO    
    else if (input == "Contatos" || input == "Telefone" || input == "E-mail" || input == "Email" || input == "Número de contato" ||
    input == "Numero de contato" || input == "Celular" || input == "contatos" || input == "telefone" || input == "e-mail" || input == "contato" || input == "Contato" ||
    input == "email" || input == "numero de contato" || input == "celular" || input == "qual o contato de voces" || input == "qual o contato de vocês" || 
    input == "número de contato" || input == "Qual a localizacao" || input == "qual a localização" || input == "Qual a localização" ||
    input == "Qual o contato de voces" || input == "Qual o contato de vocês?" || input == "onde posso entrar em contato?" || input == "Onde posso entrar em contato?" || 
    input == "como posso entrar em contato" || input == "como posso entrar em contato?" || input == "Como posso entrar em contato" || input == "Como posso entrar em contato?") {
        return "Pode entrar em contato pelos numeros (11) 9 9999-9999, whatsapp (11) 9 8888-8888 ou por e-mail: petcenter@gmail.com";
    }

    // TOSA    
    else if (input == "Tosa" || input == "Banho" || input == "Banho e tosa" || input == "Tosar" || input == "Dar banho" || input == "Limpeza" ||
    input == "Dente" || input == "Limpeza dental" || input == "Escovação" || input == "Escovacao" || input == "Escovaçao" || input == "tosa" || input == "banho" ||
    input == "banho e tosa" || input == "tosar" || input == "dar banho" || input == "limpeza" || input == "dente" || input == "limpeza dental" ||
    input == "escovação" || input == "escovacao" || input == "escovaçao") {
        return "Digite a opção que deseja saber sobre tosa: <br><br>Banho em cachorro<br> Banho em gato<br> Tosa em cachorro<br> Tosa em gato<br> Tosa higiênica em cachorro<br> Tosa higiênica em gato<br> Limpeza dental para cachorro";               
    }

    // BANHO EM CACHORRO    
    else if (input == "Banho em cachorro" || input == "Banho de cachorro" || input == "banho em cachorro" || input == "banho de cachorro") {
        return "Banho em cachorro: <br><br>Pequeno ou Médio de pelo curto R$50,00<br> Pequeno ou Médio de pelo longo R$70,00<br> Grande de pelo curto R$110,00<br> Grande de pelo longo R$130,00<br> Gigante de pelo curto R$150,00<br> Gigante de pelo longo R$180,00<br>";               
    }

    // TOSA EM CACHORRO    
    else if (input == "Tosa em cachorro" || input == "Tosa de cachorro" || input == "tosa em cachorro" || input == "tosa de cachorro") {
        return "Tosa em cachorro: <br><br>Pequeno ou Médio R$70,00<br> Grande R$110,00<br> Gigante R$130,00";               
    }

    // TOSA HIGIENICA EM CACHORRO    
    else if (input == "Tosa higiênica em cachorro" || input == "Tosa higiênica de cachorro" || input == "tosa higiênica em cachorro" || input == "tosa higiênica de cachorro" || 
    input == "Tosa higienica em cachorro" || input == "Tosa higienica de cachorro" || input == "tosa higienica em cachorro" || input == "tosa higienica de cachorro") {
        return "Tosa higiênica em cachorro: <br><br>Pequeno ou Médio R$40,00<br> Grande R$55,00<br> Gigante R$65,00";               
    }

    // LIMPEZA DENTAL EM CACHORRO    
    else if (input == "Limpeza dental em cachorro" || input == "Limpeza dental de cachorro" || input == "Limpeza dental para cachorro" || input == "limpeza dental em cachorro" || 
    input == "limpeza dental de cachorro" || input == "limpeza dental para cachorro") {
        return "Limpeza dental em cachorro: <br><br>Mini ou pequeno: R$ 200,00<br> Médio R$230,00<br> Grande R$260,00<br> Gigante R$290,00";               
    }

    // BANHO EM GATO    
    else if (input == "Banho em gato" || input == "Banho de gato" || input == "banho em gato" || input == "banho de gato") {
        return "Banho de gato R$50,00";               
    }

    // TOSA EM GATO    
    else if (input == "Tosa em gato" || input == "Tosa de gato" || input == "tosa em gato" || input == "tosa de gato") {
        return "Tosa de gato R$60,00";               
    }

    // TOSA HIGIÊNICA EM GATO    
    else if (input == "Tosa higiênica em gato" || input == "Tosa higiênica de gato" || input == "tosa higiênica em gato" || input == "tosa higiênica de gato" || 
    input == "Tosa higienica em gato" || input == "Tosa higienica de gato" || input == "tosa higienica em gato" || input == "tosa higienica de gato") {
        return "Tosa higiênica de gato : <br><br>Pequeno ou Médio R$40,00<br> Grande R$55,00<br> Gigante R$65,00<br>";               
    }

    // VACINA    
    else if (input == "Vacina" || input == "Vacinação" || input == "Vacinaçao" || input == "Vacinacao" || 
    input == "vacina" || input == "vacinação" || input == "vacinaçao" || input == "vacinacao") {
        return "Digite 'Vacina para gato' ou 'Vacina para cachorro' de acordo com a que deseja ter mais informações";               
    }

    // VACINA EM CACHORRO   
    else if (input == "Vacina para cachorro" || input == "vacina para cachorro" || input == "Vacina em cachorro" || input == "Vacina em cachorro") {
        return "Anti-rábica R$70,00<br> Bronchi/Tosse R$50,00<br> V10 R$90,00<br> Giárdia R$110,00<br> Gripe Canina R$70,00";               
    }

    // VACINA EM GATO   
    else if (input == "Vacina para gato" || input == "vacina para gato" || input == "Vacina em gato" || input == "vacina em gato") {
        return "Quádrupla felina (Polivalente) R$80,00 cada dose<br> Anti-rábica R$50,00";               
    }

    // CASTRAÇÃO  
    else if (input == "Castração" || input == "Castraçao" || input == "Castracao" || 
    input == "castração" || input == "castraçao" || input == "castracao") {
        return "Castração em gatos: <br> Femêa R$700,00<br> Macho R$400,00<br><br> Castração em cachorros: <br> Fêmea R$800,00<br> Macho R$900,00";               
    }

    // DICAS  
    else if (input == "dica" || input == "dicas" || input == "Dica" || input == "Dicas" || input == "serviços" || input == "Serviços") {
        return "Digite uma das seguintes opções para ver nossos serviços: <br><br> Funcionamento<br> Localização<br> Contato<br> Tosa<br> Vacina<br> Castração<br>";               
    }

    // INUTILIDADES
    else if (input == "quem e voce" || input == "quem é voce" || input == "quem e voce?" || input == "quem é voce?" || 
    input == "quem e você" || input == "quem é você" || input == "quem e você?" || input == "quem é você?" || 
    input == "Quem e voce" || input == "Quem é voce" || input == "Quem e voce?" || input == "Quem é voce?" || 
    input == "Quem e você" || input == "Quem é você" || input == "Quem e você?" || input == "Quem é você?") {
        return "Eu sou o Chatbot virtual da PetCenter, em que posso ajudar?";
    }

    // BOTAO FAVORITO
    else if (input == "Adorei o site!") {
        return "Obrigado pelo apoio ;)";
     }

    // TEXTO VAZIO
     else if (input == "Opa! Apertei sem querer :/") {
        return "Tranquilo hahaha";
     }
     
     // TEXTO ERRADO
     else {
        return "Não pude entender, caso precise de ajuda com o chat digite digite 'Dicas' para saber mais sobre nossos serviços";
    }

}