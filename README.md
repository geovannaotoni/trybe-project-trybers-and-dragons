# Trybers And Dragons - POO, SOLID e TypeScript.
Este projeto consiste na criação de uma estrutura de jogo RPG (Role Playing Game), através dos princípios da Programação Orientada a Objetos (POO) com linguagem TypeScript.

## :computer: Visualize este projeto:
- Faça o clone do repositório.
- Instale as dependências: `npm install`

## :bulb: Habilidades:
O jogo possui as seguintes estruturas:

- `Classe abstrata Race e classes derivadas`: Classes Dwarf, Elf, Halfling e Orc estendem de Race.
- `Classe abstrata Archetype e classes derivadas`: Classes ArcheMage, Necromancer, Warrior e Ranger estendem de Archetype.
- `Interface Fighter e classe derivada`: Classe Character implementa essa interface.
- `Interface SimpleFighter e classe derivada`: Classe Monster implementa essa interface.
- `Classe Dragon`: estende a classe Monster.
- `Classe abstrata Battle e classes derivadas`: Classe PVP (player versus player) e PVE (player versus environment) estendem Battle.