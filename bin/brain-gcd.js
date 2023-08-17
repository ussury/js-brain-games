#!/usr/bin/env node

import welcom from '../src/cli.js';
import gcd from '../src/gcd.js';

const name = welcom();
gcd(name);
