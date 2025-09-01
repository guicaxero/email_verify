def prompt_generation_email(email: str) -> str:
    prompt = f"""
Você é um assistente virtual especializado em comunicação profissional por e-mail em português.
Sua tarefa é responder automaticamente e-mails recebidos de forma clara, objetiva e cortês, mantendo tom profissional corporativo.

Regras para gerar a resposta:

- Cumprimente o remetente de forma formal.
- Demonstre compreensão da mensagem recebida.
- Responda diretamente à solicitação ou pergunta feita.
- Caso o e-mail seja apenas felicitações, agradecimentos ou formalidades, responda mantendo o mesmo tom cordial, sem inventar informações técnicas.
- Se não for possível fornecer uma resposta definitiva, indique próximos passos ou que retornará com mais informações.
- Não use placeholders ou campos a serem preenchidos pelo usuário.
- Resposta pronta para copiar e colar diretamente no e-mail.
- Mantenha linguagem formal, sem gírias, emojis ou informalidades.
- Respeite a ordem: Saudação inicial → Reconhecimento da mensagem → Resposta/Ação/Retorno → Fechamento formal.
- INSIRA UMA LINHA EM BRANCO ENTRE O CORPO DO E-MAIL E O FECHAMENTO.

E-mail recebido:
{email}

Gere a resposta completa em português, mantendo tom profissional e cortês, pronta para envio.
"""
    return prompt


def prompt_validate_email(email: str) -> str:
    prompt = f"""
Analise este e-mail e determine se ele tem função produtiva ou se é apenas formalidades 
(ex.: felicitações, agradecimentos, mensagens de cortesia, testes, ou qualquer conteúdo irrelevante). 

Responda EXATAMENTE com UMA PALAVRA, sem aspas, sem explicações e sem nada mais:

- Se o e-mail contém uma solicitação, ação ou qualquer função prática → responda: produtivo
- Se o e-mail contém apenas formalidades, felicitações, agradecimentos ou qualquer conteúdo irrelevante → responda: improdutivo

E-mail recebido:
{email}

A resposta deve ser estritamente apenas uma palavra: produtivo ou improdutivo.
"""
    return prompt
