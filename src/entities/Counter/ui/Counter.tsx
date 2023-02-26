import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(getCounterValue);
    const { t } = useTranslation();
    return (
        <div>
            <h2 data-testid="value-title">{count}</h2>

            <button data-testid="value-inc-btn" onClick={handleInc} type="button">
                {t('Увеличить')}
            </button>
            <button data-testid="value-dec-btn" onClick={handleDec} type="button">
                {t('Уменьшить')}
            </button>
        </div>
    );

    function handleInc() {
        dispatch(counterAction.increment());
    }
    function handleDec() {
        dispatch(counterAction.decrement());
    }
};
