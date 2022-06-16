import { $ready, mounted, started } from './boot.model';

const $$boot = {
  started,

  mounted,

  ready: $ready
};

export { $$boot };
