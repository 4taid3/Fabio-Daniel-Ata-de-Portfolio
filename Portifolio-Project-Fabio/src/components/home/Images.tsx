export default function Images() {
  return (
    <div
      style={{
        width: 240,
        height: 240,
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid #000000'
      }}
    >
      <img
        alt="Foto de perfil"
        src="../../public/images/eu.jpeg"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  );
}
