# Twenty One Pilots — Discografia e Lore

Landing page criada como projeto de portfólio, explorando a história, os álbuns e o universo narrativo (lore) construído pela banda Twenty One Pilots ao longo de sua discografia.

🔗 **[Ver o projeto ao vivo](https://21p-fan-website.vercel.app)**

![Preview do projeto](./preview.png)

## Sobre o projeto

O objetivo foi ir além de uma landing page estática comum, unindo conteúdo narrativo (a lore da banda) com interações que reforçam a identidade visual de cada seção, cores que mudam conforme o álbum selecionado, um mapa interativo do universo fictício da banda, e animações de texto personalizadas.

## Funcionalidades

- **Carrossel de álbuns**: com transição animada e paleta de cores dinâmica, mudando o fundo e os detalhes visuais conforme o álbum selecionado
- **Galeria de personagens**: da lore, com troca de traje/visual e navegação por setas ou índice numérico
- **Mapa interativo**: da região fictícia de Dema/Trench, com zoom, arraste e pontos clicáveis que revelam a história de cada local
- **Animação de texto customizada**: revelando as descrições estilo "fumaça", reforçando o tema de mistério da lore
- **Design responsivo**: adaptado para desktop e dispositivos móveis

## Tecnologias e técnicas utilizadas

- **React + TypeScript**: componentização e tipagem estática, garantindo maior previsibilidade e menos erros durante o desenvolvimento
- **Vite**: ambiente de build rápido para desenvolvimento
- **Hooks customizados**: lógica reutilizável para as animações de texto e para reagir a mudanças de tamanho de tela
- **Context/estado compartilhado**: controle de tema de cor dinâmico entre componentes
- **react-zoom-pan-pinch**: biblioteca para a experiência de zoom e arraste no mapa interativo
- **CSS moderno**: uso de `clip-path`, gradientes dinâmicos e `color-mix()` para efeitos visuais sem depender de imagens extras
- **Boas práticas de acessibilidade**: uso de `aria-label` em elementos interativos sem texto visível

## Rodando o projeto localmente

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
npm install
npm run dev
```

## Aviso legal

Este é um projeto de fã, criado exclusivamente para fins de portfólio, estudo e treino. Não possui vínculo oficial com a banda Twenty One Pilots ou sua gravadora. Todo o conteúdo relacionado à banda, incluindo nomes, imagens e conceitos da lore, pertence aos seus respectivos detentores dos direitos.

## Autor

Desenvolvido por **Adriano Fernandes Scarabelli**

- [LinkedIn](www.linkedin.com/in/adriano-fernandes-scarabelli-728a31184)
