import type { Exercise } from '../types';
import { LegPressAnimation } from '../animations/LegPress';
import { HipAbductionAnimation } from '../animations/HipAbduction';
import { LegCurlAnimation } from '../animations/LegCurl';
import { CableRowAnimation } from '../animations/CableRow';
import { ChestPressAnimation } from '../animations/ChestPress';
import { PlankAnimation } from '../animations/Plank';
import { DeadBugAnimation } from '../animations/DeadBug';

export const EXERCISES: Exercise[] = [
  {
    id: 'leg-press',
    name: 'Prensa de piernas',
    category: 'lower',
    muscles: ['Cuádriceps', 'Glúteos', 'Isquiosurales'],
    sets: 3,
    reps: '12 repeticiones',
    instructions: [
      'Siéntate con espalda y cabeza apoyadas completamente. Glúteo pegado al asiento.',
      'Pies sobre la plataforma a la anchura de las caderas, talones bien apoyados.',
      'Comienza con rodillas a 90°. Empuja hacia arriba exhalando. No extiendas las piernas del todo — rodillas siempre levemente flexionadas.',
      'Baja lentamente controlando el movimiento. Inhala en esta fase.',
    ],
    warning: 'Empieza con la carga más ligera. Si la espalda baja se despega del respaldo, reduce el peso.',
    youtube: 'https://www.youtube.com/watch?v=hl-EJUQ2yuc',
    Animation: LegPressAnimation,
  },
  {
    id: 'hip-abduction',
    name: 'Abducción de cadera',
    category: 'lower',
    muscles: ['Glúteo medio', 'Abductores'],
    sets: 3,
    reps: '12 repeticiones',
    instructions: [
      'Siéntate en la máquina con los rodillos a la altura de los muslos. Espalda apoyada.',
      'Agarra las asas laterales. Abre las piernas lentamente hasta donde resulte cómodo, exhalando.',
      'Vuelve al centro de forma controlada. No dejes que el peso tire de golpe. Inhala.',
    ],
    warning: 'Movimiento lento y sin tirones. Si hay molestia en la cadera, reduce el rango de apertura.',
    youtube: 'https://www.youtube.com/watch?v=1nabNRrKUyU',
    Animation: HipAbductionAnimation,
  },
  {
    id: 'leg-curl',
    name: 'Curl femoral en máquina',
    category: 'lower',
    muscles: ['Isquiosurales'],
    sets: 3,
    reps: '12 repeticiones',
    instructions: [
      'Siéntate con espalda apoyada. Ajusta el cojín firmemente sobre los muslos.',
      'Coloca los tobillos detrás de los rodillos. Agarra las asas para estabilizar.',
      'Flexiona las rodillas llevando los talones hacia abajo. Exhala al flexionar, inhala al volver.',
    ],
    warning: 'Mantén la cabeza alineada con la columna, sin forzar el cuello hacia arriba. Peso muy ligero.',
    youtube: 'https://www.youtube.com/watch?v=kU6YEyUzPcA',
    Animation: LegCurlAnimation,
  },
  {
    id: 'cable-row',
    name: 'Remo en polea baja',
    category: 'upper',
    muscles: ['Dorsal', 'Bíceps', 'Romboides', 'Agarre neutro'],
    sets: 3,
    reps: '12 repeticiones',
    instructions: [
      'Siéntate con rodillas levemente flexionadas, pies en las plataformas.',
      'Coge el accesorio en V (palmas enfrentadas). Espalda recta, pecho erguido.',
      'Tira hacia el abdomen con los codos pegados al cuerpo. Junta los omóplatos. Exhala.',
      'Extiende los brazos de vuelta de forma controlada. Inhala.',
    ],
    warning: 'Peso muy suave. Si el cuello se tensa o los hombros suben, reduce el peso. Espalda baja neutra siempre.',
    youtube: 'https://www.youtube.com/watch?v=hiujo_wbkLU',
    Animation: CableRowAnimation,
  },
  {
    id: 'chest-press',
    name: 'Press de pecho en máquina',
    category: 'upper',
    muscles: ['Pectoral mayor', 'Tríceps', 'Deltoides anterior'],
    sets: 3,
    reps: '12 repeticiones',
    instructions: [
      'Ajusta el asiento: los mangos a la altura media-baja del pecho.',
      'Espalda y glúteos completamente apoyados. Pies planos en el suelo.',
      'Empuja hacia adelante exhalando. No bloquees los codos al final. Vuelve lentamente.',
    ],
    warning: 'Si sientes pinzamiento en el hombro, para inmediatamente. Empieza con el peso más ligero. No hacer si el médico o fisio lo ha restringido.',
    youtube: 'https://www.youtube.com/watch?v=lw4uUkBl_HE',
    Animation: ChestPressAnimation,
  },
  {
    id: 'plank',
    name: 'Plancha estática',
    category: 'core',
    muscles: ['Core', 'Glúteos', 'Hombros', 'Estabilizadores'],
    sets: 3,
    reps: '20–30 segundos',
    instructions: [
      'Apóyate en antebrazos y puntas de pie (o rodillas si es más cómodo). Codos bajo los hombros.',
      'Cuerpo en línea recta. Activa el abdomen. Cervicales neutras: mira al suelo.',
      'Respira con normalidad. No aguantes la respiración.',
    ],
    warning: 'Apoya las rodillas — es igual de válido y más seguro. Si el cuello se tensa, para y ajusta.',
    youtube: 'https://www.youtube.com/watch?v=qVnZtJGK4zY',
    Animation: PlankAnimation,
  },
  {
    id: 'dead-bug',
    name: 'Dead Bug',
    category: 'core',
    muscles: ['Core profundo', 'Transverso abdominal', 'Zona lumbar'],
    sets: 3,
    reps: '12 reps (alternando lados)',
    instructions: [
      'Túmbate boca arriba. Brazos extendidos al techo, rodillas a 90°.',
      'Pega la espalda baja al suelo activando el abdomen. Este contacto debe mantenerse siempre.',
      'Baja el brazo derecho hacia atrás mientras extiendes la pierna izquierda. Inhala lentamente.',
      'Vuelve al centro. Repite con el lado contrario. Eso es 1 repetición completa.',
    ],
    warning: 'Ve muy despacio. Si la espalda baja se despega del suelo, no bajes tan abajo. Nunca fuerces el cuello.',
    youtube: 'https://www.youtube.com/watch?v=HN3wyEcYC2g',
    Animation: DeadBugAnimation,
  },
];
