#!/usr/bin/env node

import welcom from '../src/cli.js';
import progression from '../src/progression.js';

const name = welcom();
progression(name);
