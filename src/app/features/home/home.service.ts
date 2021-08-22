import { HomePost } from './model/post.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  homePost: Array<HomePost> = [
    {
      id: '1',
      title: 'Jiu Jitsu intro',
      subtitle: 'Conheça a arte suave milenar',
      content:
        'Jiujitsu, mais conhecido na sua forma ocidentalizada Jiu-jitsu, ju-jitsu, é uma arte marcial japonesa, e também um esporte de combate, que utiliza técnicas de golpes de alavancas, torções e pressões para derrubar e dominar um oponente.',
      imageUrl:
        'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aml1JTIwaml0c3V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '2',
      title: 'Competiçoes',
      subtitle: 'Saiba como funcionam as competiçoes de jiujitsu',
      content:
        'Nesse modelo de competição, cada equipe participa com cinco atletas titulares e dois reservas. Cada técnico escolhe a ordem de 1 a 5 para seus lutadores, em segredo. Na hora do confronto, os lutadores de mesmo número se enfrentam. A equipe que vencer três, das cinco lutas, é considerada a campeã.',
      imageUrl:
        'https://images.unsplash.com/photo-1515025617920-e1e674b5033c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aml1JTIwaml0c3V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '3',
      title: 'Nossos Treinos',
      subtitle: 'Como funcionam nosso treinos',
      content:
        'Vale ressaltar que cada academia e cada professor têm seus métodos próprios e algumas exclusividades na hora de montar o treino. Portanto, faremos aqui uma explicação geral de como se desenvolve um treino, sem entrar em muitos detalhes. O treino de Jiu-Jitsu pode durar de 40 até 90 minutos, dependendo da intensidade e da quantidade de alunos. O começo é sempre com um aquecimento mais intenso, feito com os alunos já vestidos com o kimono. No aquecimento é comum os alunos realizarem corridas ao redor do tatame, polichinelos, abdominais, flexões, e movimentos voltados à prática do Jiu-Jitsu, como saídas de quadril e rolamento. Em algumas academias, o professor realiza uma espécie de treino funcional como forma de aquecimento.',
      imageUrl:
        'https://images.unsplash.com/photo-1611711605692-acb25d5d8399?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aml1JTIwaml0c3V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];
  constructor() {}
}
