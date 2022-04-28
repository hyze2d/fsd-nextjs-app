const isServerSide = () => typeof window === 'undefined';
const isClientSide = () => typeof window !== 'undefined';

export { isClientSide, isServerSide };
