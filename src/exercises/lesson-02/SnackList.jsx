function SnackList() {
  const snacks = [
    { name: 'celery', rank: 5 },
    { name: 'veggie chips', rank: 4 },
    { name: 'zucchini chips', rank: 3 },
    { name: 'nuts', rank: 2 },
    { name: 'fruit', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ol>
  );
}

export default SnackList;
