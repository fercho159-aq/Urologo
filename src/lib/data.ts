import { CalendarCheck, Hospital, Stethoscope, Users, MapPin, Phone, Mail } from 'lucide-react';

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sintomas', label: 'Síntomas' },
  { href: '#urologos', label: 'Urólogos' },
  { href: '#costos', label: 'Costos' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
];

export const services = [
  {
    title: 'Resección Transuretral de Próstata (RTUP)',
    shortDescription: 'El estándar de oro para el tratamiento de la Hiperplasia Prostática Benigna (HPB), aliviando los síntomas urinarios.',
    longDescription: 'La Resección Transuretral de la Próstata (RTUP) es un procedimiento quirúrgico para tratar problemas urinarios debidos a un agrandamiento de la próstata. Un instrumento combinado visual y quirúrgico (resectoscopio) se inserta a través de la punta del pene y en el conducto que transporta la orina desde la vejiga (uretra). Esto permite al cirujano ver y recortar el exceso de tejido prostático que está bloqueando el flujo de orina.',
    icon: Stethoscope,
    image: 'service-resection'
  },
  {
    title: 'Prostatectomía Radical',
    shortDescription: 'Extirpación completa de la glándula prostática, principal tratamiento para el cáncer de próstata localizado.',
    longDescription: 'La prostatectomía radical es una cirugía para extirpar toda la glándula prostática y algunos tejidos circundantes para tratar el cáncer de próstata. Se puede realizar mediante una incisión abierta o con técnicas de mínima invasión, como la cirugía laparoscópica o robótica, lo que puede resultar en menos dolor y una recuperación más rápida.',
    icon: Hospital,
    image: 'service-prostatectomy'
  },
  {
    title: 'Terapia Láser GreenLight',
    shortDescription: 'Procedimiento mínimamente invasivo que utiliza láser para vaporizar el tejido prostático y mejorar el flujo urinario.',
    longDescription: 'La terapia con láser GreenLight es un procedimiento mínimamente invasivo que utiliza un láser de alta potencia para vaporizar el tejido prostático que obstruye la uretra. Ofrece un alivio rápido de los síntomas, menos sangrado que la RTUP tradicional y una estancia hospitalaria más corta, siendo una excelente opción para muchos pacientes.',
    icon: Users,
    image: 'service-greenlight'
  },
  {
    title: 'Consulta Urológica General',
    shortDescription: 'Evaluación completa de la salud urológica, diagnóstico y planes de tratamiento para diversas condiciones.',
    longDescription: 'Ofrecemos consultas exhaustivas para una amplia gama de problemas urológicos más allá de la próstata. Esto incluye infecciones del tracto urinario, cálculos renales, disfunción eréctil y otras preocupaciones de salud masculina. Nuestro enfoque es un diagnóstico preciso y un plan de tratamiento compasivo y eficaz.',
    icon: CalendarCheck
  },
];

export const faqs = [
  {
    question: '¿Cuándo debo considerar la cirugía de próstata?',
    answer: 'La cirugía de próstata se considera cuando los síntomas del agrandamiento de la próstata (HPB) son de moderados a graves y no han respondido a los medicamentos, o en casos de cáncer de próstata. La decisión se toma junto con su urólogo tras una evaluación completa.'
  },
  {
    question: '¿Cuáles son los riesgos de la cirugía de próstata?',
    answer: 'Como cualquier cirugía, existen riesgos que incluyen sangrado, infección, incontinencia urinaria y disfunción eréctil. Sin embargo, las técnicas modernas han reducido significativamente estos riesgos. Su cirujano discutirá los riesgos específicos de su procedimiento en detalle.'
  },
  {
    question: '¿Cómo es la recuperación después de la cirugía?',
    answer: 'La recuperación varía según el tipo de cirugía. Para procedimientos mínimamente invasivos, la recuperación es más rápida, a menudo con solo una noche de hospitalización. La recuperación completa puede tardar varias semanas, durante las cuales se le darán instrucciones específicas sobre actividad física y cuidados.'
  },
  {
    question: '¿La cirugía afectará mi vida sexual?',
    answer: 'La disfunción eréctil puede ser una secuela, especialmente después de una prostatectomía radical por cáncer. Sin embargo, existen técnicas de preservación de nervios y tratamientos postoperatorios para ayudar a recuperar la función eréctil. Es un tema importante que debe discutir abiertamente con su médico.'
  },
  {
    question: '¿Qué es la Hiperplasia Prostática Benigna (HPB)?',
    answer: 'La HPB es un agrandamiento no canceroso de la glándula prostática, una condición común en hombres a medida que envejecen. Puede causar síntomas urinarios molestos, como dificultad para orinar, necesidad frecuente o urgente de orinar, y flujo urinario débil.'
  }
];

export const testimonials = [
  {
    quote: 'El profesionalismo y la calidez humana del doctor y su equipo me dieron la confianza que necesitaba. La cirugía fue un éxito y mi calidad de vida ha mejorado inmensamente. Eternamente agradecido.',
    name: 'Carlos M.',
    city: 'Ciudad de México',
    image: 'testimonial-patient-1'
  },
  {
    quote: 'Tenía mucho miedo, pero me explicaron cada detalle del procedimiento con paciencia. La recuperación fue mucho más rápida de lo que esperaba. Recomiendo esta clínica sin dudarlo.',
    name: 'Roberto V.',
    city: 'Estado de México',
    image: 'testimonial-patient-2'
  },
  {
    quote: 'Desde la primera consulta hasta el seguimiento postoperatorio, el trato fue excepcional. Son verdaderos expertos y se preocupan genuinamente por sus pacientes. Mi salud está en las mejores manos.',
    name: 'Javier L.',
    city: 'Puebla',
    image: 'testimonial-patient-3'
  }
];


export const blogPosts = [
  {
    slug: 'que-esperar-antes-de-la-cirugia',
    title: '¿Qué esperar antes de su cirugía de próstata?',
    excerpt: 'Prepararse para una cirugía de próstata puede generar muchas preguntas. Aquí le explicamos los pasos clave, desde las consultas iniciales hasta el día de la operación, para que se sienta seguro y bien informado.',
    content: `
      <p>La decisión de someterse a una cirugía de próstata es significativa. Una preparación adecuada es clave para un resultado exitoso y una recuperación tranquila. A continuación, desglosamos lo que puede esperar en las semanas previas a su procedimiento.</p>
      <h3 class="font-headline text-xl font-semibold mt-4 mb-2">Consultas y Evaluaciones</h3>
      <p>Antes de la cirugía, tendrá varias citas con su urólogo. Estas incluirán un examen físico, análisis de sangre (como el PSA), estudios de imagen (ecografía) y posiblemente una biopsia si se sospecha de cáncer. Es el momento ideal para resolver todas sus dudas.</p>
      <h3 class="font-headline text-xl font-semibold mt-4 mb-2">Preparación Física y Mental</h3>
      <p>Se le pueden dar instrucciones sobre su dieta, medicamentos y ejercicio. Es posible que deba dejar de tomar ciertos medicamentos, como anticoagulantes, antes de la cirugía. Mentalmente, es útil hablar con su familia y entender el proceso para reducir la ansiedad.</p>
    `,
    date: '2024-05-15',
    image: 'blog-pre-surgery'
  },
  {
    slug: 'tipos-de-cirugia-de-prostata',
    title: 'Conociendo los Tipos de Cirugía de Próstata',
    excerpt: 'No todas las cirugías de próstata son iguales. Desde la RTUP tradicional hasta la prostatectomía robótica, conozca las diferentes opciones de tratamiento, sus ventajas y para quién son más adecuadas.',
    content: `
      <p>La elección del tipo de cirugía de próstata depende de su condición específica, ya sea HPB o cáncer, así como de su salud general. Aquí exploramos las opciones más comunes.</p>
      <h3 class="font-headline text-xl font-semibold mt-4 mb-2">Resección Transuretral de la Próstata (RTUP)</h3>
      <p>Considerada durante mucho tiempo el estándar de oro para la HPB, la RTUP implica la extirpación del tejido prostático a través de la uretra, sin incisiones externas.</p>
      <h3 class="font-headline text-xl font-semibold mt-4 mb-2">Prostatectomía Asistida por Robot</h3>
      <p>Para el cáncer de próstata, la cirugía robótica ofrece una precisión increíble. Permite al cirujano realizar movimientos complejos a través de pequeñas incisiones, lo que a menudo se traduce en una recuperación más rápida y una mejor preservación de la función nerviosa.</p>
    `,
    date: '2024-05-22',
    image: 'blog-types-surgery'
  },
  {
    slug: 'cuidados-postoperatorios-esenciales',
    title: 'Cuidados Postoperatorios Esenciales para una Recuperación Óptima',
    excerpt: 'La cirugía es solo el primer paso. Una recuperación exitosa depende en gran medida de los cuidados que tenga en casa. Descubra los consejos clave para el manejo del dolor, la dieta, la actividad y las señales de alerta.',
    content: `
      <p>Después de su cirugía de próstata, seguir las indicaciones de su médico es crucial para una recuperación sin complicaciones. Aquí hay algunas pautas generales.</p>
      <h3 class="font-headline text-xl font-semibold mt-4 mb-2">Manejo de la Sonda y Actividad</h3>
      <p>Es probable que regrese a casa con un catéter urinario por un corto período. Le enseñaremos cómo manejarlo. La actividad física debe ser limitada al principio; evite levantar objetos pesados y realizar esfuerzos.</p>
      <h3 class="font-headline text-xl font-semibold mt-4 mb-2">Dieta e Hidratación</h3>
      <p>Beba muchos líquidos para ayudar a limpiar la vejiga. Una dieta rica in fibra puede prevenir el estreñimiento, que puede ser incómodo después de la cirugía. Su médico le dará pautas específicas según su caso.</p>
    `,
    date: '2024-05-29',
    image: 'blog-post-care'
  }
];

export const contactInfo = {
    phone: '56 4002 8714',
    email: 'contacto@urolog.com',
    address: 'Av. Patriotismo 579, Cd. de los Deportes, Benito Juárez, 03710 Ciudad de México, CDMX, México',
    location: {
        lat: 19.383263,
        lng: -99.183561,
    },
    items: [
        {
            icon: Phone,
            label: 'Teléfono',
            value: '56 4002 8714',
            href: 'tel:5640028714'
        },
        {
            icon: Mail,
            label: 'Correo Electrónico',
            value: 'contacto@urolog.com',
            href: 'mailto:contacto@urolog.com'
        },
        {
            icon: MapPin,
            label: 'Ubicación',
            value: 'Av. Patriotismo 579, CDMX',
        }
    ]
}
