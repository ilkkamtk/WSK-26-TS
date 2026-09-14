import {readdir, readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';

const buildDirectory = new URL('../build/', import.meta.url);

async function updateImports(directory) {
  const entries = await readdir(directory, {withFileTypes: true});

  for (const entry of entries) {
    const path = join(directory.pathname, entry.name);

    if (entry.isDirectory()) {
      await updateImports(new URL(`${entry.name}/`, directory));
      continue;
    }

    if (!entry.name.endsWith('.js')) {
      continue;
    }

    const file = new URL(entry.name, directory);
    const source = await readFile(file, 'utf8');
    const updated = source.replace(
      /(\bfrom\s*['"]|\bimport\s*\(\s*['"])(\.{1,2}\/[^'"]+)(['"])/g,
      (match, prefix, importPath, suffix) =>
        /\.[a-z]+$/i.test(importPath)
          ? match
          : `${prefix}${importPath}.js${suffix}`
    );

    if (updated !== source) {
      await writeFile(file, updated);
    }
  }
}

await updateImports(buildDirectory);
