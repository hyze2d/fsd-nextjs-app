type CommonNamespaceStructure = { kek: 'dsad' };

type HomeNamespaceStructure = { title: 'Home' };

type LocaleStructure = CommonNamespaceStructure & HomeNamespaceStructure;

export type { LocaleStructure };
