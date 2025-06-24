# Code Citations

## License: unknown
https://github.com/bfigueroa99/P2_Desarrollo_de_Software/tree/f5d03597afdd9c730c3ace00bb938e67a3fdd75c/FrontEnd/front_p2/src/auth/AuthProvider.js

```
);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
```

