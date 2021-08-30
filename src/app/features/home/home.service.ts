import { HomePromotion } from './model/promotion.model';
import { HomeLearning } from './model/learning.model';
import { HomePost } from './model/post.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  homePost: Array<HomePost> = [
    {
      id: '1',
      title: 'Sobre o Jiu Jitsu',
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
        'A área de disputa entre dois atletas, chamada de ringue, tem área variável entre 64 e 100 metros quadrados. É restrita uma área menor para o combate, de modo que reste uma parte específica denominada de área de segurança. A cor do tatame da área de segurança é diferente da cor do tatame voltado à área de combate.',
      imageUrl:
        'https://images.unsplash.com/photo-1564415315882-6ed9429af831?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aml1JTIwaml0c3V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
  homeLearning: Array<HomeLearning> = [
    {
      id: '1',
      title: 'História do jiu-jitsu',
      subtitle: 'Conheça a arte suave milenar',
      content:
        'O Jiu-Jitsu brasileiro ou, lá fora, o Brazilian Jiu-Jitsu ou BJJ (grafado também como jujitsu ou jujutsu) é uma arte marcial de raiz japonesa que se utiliza essencialmente de golpes de alavancas, torções e pressões para levar um oponente ao chão e dominá-lo. Literalmente, jū em japonês significa “suavidade”, “brandura”, e jutsu, “arte”, “técnica”. Daí seu sinônimo literal, “arte suave”.',
      history:
        'Sua origem secular, como sucede com quase todas as artes marciais ancestrais, não pode ser apontada com precisão. Estilos de luta parecidos foram verificados em diversos povos, da Índia à China, nos séculos III e VIII. O que se sabe é que seu ambiente de desenvolvimento e refinamento foram as escolas de samurais, a casta guerreira do Japão feudal.',
      imageUrl:
        'https://images.unsplash.com/photo-1618572671704-ef4f3add69ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FtdXJhaSUyMGhpc3Rvcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '2',
      title: 'O jiu-jitsu no Brasil',
      subtitle: 'Saiba como funcionam as competiçoes de jiujitsu',
      content:
        'Eterno defensor das técnicas de defesa pessoal do Jiu-Jitsu, Maeda embarcou para os Estados Unidos em 1904, em companhia de outros professores da escola de Jigoro Kano. À época, graças aos laços políticos e econômicos entre Japão e EUA, as técnicas japonesas encontravam grandes e notórios admiradores em solo americano. Em 1904, por exemplo, o presidente Theodore Roosevelt tomara aulas com o japonês Yoshitsugu Yamashita.',
      history: '',
      imageUrl:
        'https://images.unsplash.com/photo-1515025617920-e1e674b5033c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aml1JTIwaml0c3V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '3',
      title: 'Herança e filosofia',
      subtitle: 'Como funcionam nosso treinos',
      content:
        'A cultura e a religião japonesas tornaram-se entrelaçadas nas artes marciais. Budismo, Xintoísmo, Taoísmo e Filosofia confucionista coexistem no Japão, e as pessoas geralmente se misturam e combinam para se adequar. Isso reflete a variedade de perspectivas que se encontra nas diferentes escolas. Jui Jitsu expressa a filosofia de ceder à força de um oponente em vez de tentar opor-se à força com força. Manipular o ataque de um oponente usando sua força e direção permite ao jiujiteiro (jujutsuka) que controle o equilíbrio de seu adversário e, portanto, evite que o adversário resista ao contra-ataque.',

      history:
        'A cultura e a religião japonesas tornaram-se entrelaçadas nas artes marciais. Budismo, Xintoísmo, Taoísmo e Filosofia confucionista coexistem no Japão, e as pessoas geralmente se misturam e combinam para se adequar. Isso reflete a variedade de perspectivas que se encontra nas diferentes escolas. Jui Jitsu expressa a filosofia de ceder à força de um oponente em vez de tentar opor-se à força com força. Manipular o ataque de um oponente usando sua força e direção permite ao jiujiteiro (jujutsuka) que controle o equilíbrio de seu adversário e, portanto, evite que o adversário resista ao contra-ataque.',
      imageUrl:
        'https://images.unsplash.com/photo-1611711605692-acb25d5d8399?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aml1JTIwaml0c3V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '4',
      title: 'Quem foi helio gracie',
      subtitle: 'Como funcionam nosso treinos',
      content:
        'Hélio Gracie foi o patriarca da família Gracie. Foi responsável pela difusão do Jiu-Jitsu no Brasil e idealizador do estilo de arte marcial brasileira conhecido como Jiu-jitsu brasileiro. Descendente distante de escoceses, quando era apenas uma criança sua família mudou-se para o Rio de Janeiro.',
      history:
        ' (Belém do Pará, 1 de outubro de 1913 – Petrópolis, 29 de janeiro de 2009) foi o patriarca da família Gracie',
      imageUrl:
        'https://extra.globo.com/profile/bl_combateextra/23172747-4dd-582/w976h550-PROP/helio-gracie.jpg',
    },
  ];
  homePromotion: Array<HomePromotion> = [
    {
      id: '3',
      title: 'Pacote Premium',
      subtitle: 'Como funcionam nosso treinos',
      content:
        'Vale ressaltar que cada academia e cada professor têm seus métodos próprios e algumas exclusividades na hora de montar o treino. Portanto, faremos aqui uma explicação geral de como se desenvolve um treino, sem entrar em muitos detalhes. O treino de Jiu-Jitsu pode durar de 40 até 90 minutos, dependendo da intensidade e da quantidade de alunos. O começo é sempre com um aquecimento mais intenso, feito com os alunos já vestidos com o kimono. No aquecimento é comum os alunos realizarem corridas ao redor do tatame, polichinelos, abdominais, flexões, e movimentos voltados à prática do Jiu-Jitsu, como saídas de quadril e rolamento. Em algumas academias, o professor realiza uma espécie de treino funcional como forma de aquecimento.',
      imageUrl:
        'https://images.unsplash.com/photo-1611711605692-acb25d5d8399?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aml1JTIwaml0c3V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      old_price: 300,
      new_price: 250,
    },
  ];

  findLearningById(id: string) {
    return this.homeLearning.find((post) => post.id === id) as HomeLearning;
  }
  constructor() {}
}
