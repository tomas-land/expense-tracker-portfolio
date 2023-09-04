//Components
import BalanceDisplay from './BalanceDisplay';
import ExpensesList from './ExpensesList';

export const dynamic = 'force-dynamic'

const Home = () => {
  return (
    <section>
      <BalanceDisplay />
      <ExpensesList />
    </section>
  )
}

export default Home
