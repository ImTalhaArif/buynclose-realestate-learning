export default function Footer() {
  return (
    <footer style={{
      marginTop: '60px',
      padding: '30px 40px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
      fontSize: '14px',
      color: '#777',
      borderTop: '1px solid #eaeaea'
    }}>
      &copy; {new Date().getFullYear()} BuyNclose. All rights reserved.
    </footer>
  );
}
