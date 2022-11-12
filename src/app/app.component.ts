import { AvailableService } from './models/available-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anjuman-e-mohammadi';

  public availableServices: AvailableService[] = [];

  /**
   *
   */
  constructor() {
        this.availableServices = [
          {
            title: 'Mosque',
            description: 'Mohammadi Mosque has recently been transformed into a stately and awe-inspiring building with a pristine white exterior, a massive central dome and a 160-foot minaret at the rear. It stands proudly at a centrally located site at Hali Road, Gulberg III, Lahore. Comprising four floors (including a basement) the overall total built area including Mohammadi Imambargah is around 85,000 square feet.  It can accommodate more than 5,000 Nimazis indoors at any given time, with an additional outdoor capacity of about 1,000 – an increase from its earlier capacity of a total of 500. For Majalis, seating capacity is about 10,000 attendees. The structure exudes Islamic culture in its finest architectural sophistication and considered a monument and a reference point in the area. Activities at the Mohammadi Mosque include Daily prayers, Friday prayers, Eid prayers and Moharram and other Majalises and Milads to accommodate bigger congregational gatherings. Allied facilities include (both indoor and outdoor) security, washrooms, drinking water points, wadu areas and shoe racks with sound systems and back-up generators.',
            imageUrl: 'assets/images/mosque.jpg'
          },
          {
            title: 'Imambargah',
            description: 'The Mohammadi Imambargah is an independent building structure and has an indoor seating capacity of about 700 attendees with additional outdoor seating capacity of over 1,000 attendees. The Imamabargah facility is available to the community at large to hold Majalises and Milads subject to prior arrangements made with the Anjuman’s office. Events organized at the Imambargah include Ladies Majalises and Milads, Wiladat as well as Shahadat of all Aima A.S., along with the Eid e Ghaddir, and Eid e Mubahila. In addition, Nikah ceremonies, Qul, Chehlum and Barsi of near and dear ones of Momineen are held from time to time, as sponsored by the community members. \n \n Plans are afoot to extend the Imambargah seating capacity and provide greater comfort to visitors.',
            imageUrl: 'assets/images/imambargah.jpg'
          },
          {
            title: 'Seminar',
            description: 'The primary purpose of Diwan-e-Salman Farsi Auditorium is to provide an enabling platform where knowledge seekers can meet knowledge providers and benefit from their years of study and experience. Here is where scholars, academics, researchers, experts and intellectuals from all over the world can impart knowledge and Islamic enlightenment to a large target audience; and at the same time knowledge seekers can quench their thirst on the wisdom revealed by scholars who are experts in their respective fields. Events arranged at Diwan-e-Salman Farsi include workshops, seminars, conferences, academic courses, trainings, lectures and other such programs on topics directly or indirectly related to Islam, Religion, Faith, Philosophy, Morality, Social and Spiritual Development. \n \n Diwan-e-Salman Farsi is a spacious state of the art auditorium located at IC&RC, designed and equipped according to contemporary global standards. It has a seating capacity of 250+ persons and is fully equipped with a large stage and rostrum, multimedia and stereo sound systems, UPS and all necessary teaching tools and presentation aids. It provides a professional, comfortable, efficient and conducive environment for a two-way, interactive communication.',
            imageUrl: 'assets/images/seminars.jpg'
          }
        ]
  }
}
