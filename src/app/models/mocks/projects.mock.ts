import { Project } from '../project.model';
import { Task } from '../task.model';

export const projects: Project[] = [
  new Project(1, 'Sorumlu Müşteri Projesi', 'Kredi Takibine Takılan Müşteriler', 1, new Date(2024, 5, 1), 0.3,
    [
      new Task(1, 'Database Design', new Date(2024, 5, 14), 1, true),
      new Task(2, 'REST Infrastructure', new Date(2024, 5, 20), 1, false),
    ]
  ),

  new Project(2, 'İhbar', 'Üzücü ama mecburuz :(((', 2, new Date(2024, 5, 1), 0.0,
    [
      new Task(3, 'Database Design', new Date(2024, 5, 14), 2, true),
      new Task(4, 'REST Infrastructure', new Date(2024, 5, 20), 2, false),
    ]
  ),

  new Project(3, 'Sorunlu Müşteri', 'Kredi Takibine Takılan Müşteriler', 3, new Date(2024, 5, 8), 0.8,
  [
    new Task(5, 'Database Design', new Date(2024, 5, 14), 3, true),
    new Task(6, 'REST Infrastructure', new Date(2024, 5, 20), 3, false),
  ]
),

];
