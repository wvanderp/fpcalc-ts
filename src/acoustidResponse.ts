interface Artist{
  id: string;
  name: string;
}

interface Track {
  artists?: Artist[];
  id: string;
  position: number;
  title: string;
}

interface Medium{
  format: string;
  position: number;
  // eslint-disable-next-line camelcase
  track_count: number;
  tracks?: Track[];
}
interface Release {
  id: string;
  mediums?: Medium[];
}

interface Releasegroup {
  id: string;
  releases?: Release[];
}

interface Recording {
  id: string;
  releasegroups?: Releasegroup[];
  sources: number;
}

export interface ResultsEntity {
  id: string;
  recordings?: Recording[];
  score: number;
}

export default interface acoustidResponse {
  results?: ResultsEntity[];
  error?: {code: number, message: string}
  status: 'error' | 'ok';
}
