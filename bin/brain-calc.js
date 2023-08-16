#!/usr/bin/env node

import welcom from '../src/cli.js';
import calc from '../src/calc.js';

const name = welcom();
calc(name);
