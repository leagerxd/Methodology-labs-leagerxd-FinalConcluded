## Usage

> Before the usage you need to install the latest version of [Node.js](https://nodejs.org/en/download/)
1. Clone the repository : ```git clone https://github.com/leagerxd/Methodology-labs-leagerxd-FinalConcluded```
2. Install dependencies : ```npm i```
3. Install ExpressJS : ```npm install express```
3. Run programm using: ```node .\main.js```

## Basic commands of my TO-DO application: 

```list-incomplete:``` Показує список усіх невиконаних завдань з дедлайнами, відсортований за віддаленням дедлайну.
> Приклад виклику: ```node main.js list-incomplete```

```list-all:``` Показує список всіх завдань (як виконаних, так і невиконаних) разом з дедлайнами та датами виконання.

```complete "<назва завдання>":``` Позначає завдання виконаним і проставляє поточну дату в якості дати виконання.

```add "<назва завдання>" "<опис завдання>" "<дедлайн>":``` Додає нове завдання до списку. Можливо вказати необов'язковий опис та дедлайн.

```edit "<назва завдання>" "<нова назва>" "<новий опис>" "<новий дедлайн>":``` Редагує завдання з вказаною назвою. Можливо змінити назву, опис або дедлайн (стан виконання не змінюється).

```list-overdue:``` Показує список протермінованих завдань, тобто тих, що не виконані, а дедлайн вже пройшов.

```delete "<назва завдання>":``` Видаляє завдання зі списку, як виконане, так і невиконане.

## How to run tests:

1. If you alredy have cloned repository and installed dependecies, you should check if you are in the right directory: ```cd .\Methodology-labs-leagerxd-FinalConcluded\```
2. Run tests with simple command: ```node tests.js```

## Link to Design-Document:
> # [Design Document](https://docs.google.com/document/d/166DTTn6kgMKkiVLquomTed3YqAGbgydJ8HtPonQSKTc/edit?usp=sharing)