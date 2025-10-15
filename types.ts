
export enum ProjectStatus {
  InProgress = 'In Progress',
  Completed = 'Completed',
  OnHold = 'On Hold',
  Canceled = 'Canceled',
}

export interface Project {
  id: string;
  name: string;
  client: string;
  status: ProjectStatus;
  dueDate: string;
  revenue: number;
}

export interface Activity {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  action: string;
  target: string;
  timestamp: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
}

export interface Deadline {
    id: string;
    projectName: string;
    clientName: string;
    daysLeft: number;
    team: TeamMember[];
}
