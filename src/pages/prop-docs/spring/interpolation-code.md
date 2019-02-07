```jsx
<Spring
  from={{
    width: 100,
    padding: 0,
    background:
      'linear-gradient(to right, #30e8bf, #ff8235)',
    transform:
      'translate3d(400px,0,0) scale(2) rotateX(90deg)',
    boxShadow: '0px 100px 150px -10px #2D3747',
    borderBottom: '0px solid white',
    shape: 'M20,380 L380,380 L380,380 L200,20 L20,380 Z',
    textShadow: '0px 5px 0px white'
  }}
  to={{ 
    width: 'auto', 
    padding: 20, 
    background:
      'linear-gradient(to right, #009fff, #ec2f4b)', 
    transform: 
      'translate3d(0px,0,0) scale(1) rotateX(0deg)', 
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)', 
    borderBottom: '10px solid #2D3747', 
    shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z', 
    textShadow: '0px 5px 15px rgba(255,255,255,0.5)' 
  }}>
  {props => ...}
</Spring>
```