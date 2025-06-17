import { useTranslation } from 'react-i18next';
import { useCounterActions } from '../model/slice/CounterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    // const dispatch = useDispatch();
    // const count = useSelector(getCounterValue);
    const count = useCounterValue();
    const { t } = useTranslation();
    const { increment, decrement, add } = useCounterActions();
    return (
        <div>
            23232323232323
            <h2 data-testid="value-title">{count}</h2>

            <button data-testid="value-inc-btn" onClick={handleInc} type="button">
                {t('Увеличить')}
            </button>
            <button data-testid="value-inc-btn" onClick={handleAdd} type="button">
                {t('Add 5')}
            </button>
            <button data-testid="value-dec-btn" onClick={handleDec} type="button">
                {t('Уменьшить')}
            </button>
        </div>
    );

    function handleInc() {
        increment();
        // dispatch(counterAction.increment());
    }
    function handleDec() {
        decrement();
        // dispatch(counterAction.decrement());
    }

    function handleAdd() {
        add(5);
        // dispatch(counterAction.decrement());
    }
};
