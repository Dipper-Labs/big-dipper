import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Transactions } from '/imports/api/transactions/transactions.js';
import ValidatorTransactions from './Transactions.jsx';

export default TransactionsContainer = withTracker((props) => {
    let transactionsHandle, transactions, transactionsExist;
    let loading = true;

    if (Meteor.isClient){
        transactionsHandle = Meteor.subscribe('transactions.validator', props.validator, props.delegator, props.limit);
        loading = !transactionsHandle.ready();
    }

    if (Meteor.isServer || !loading){
        transactions = Transactions.find({}, {sort:{height:-1}});

        if (Meteor.isServer){
            loading = false;
            transactionsExist = !!transactions;
        }
        else{
            transactionsExist = !loading && !!transactions;
        }
    }

    return {
        loading,
        transactionsExist,
        transferTxs: transactionsExist ? Transactions.find({
            $or: [
                {"tx.value.msg.type":"dip/MsgSend"},
                {"tx.value.msg.type":"dip/MsgMultiSend"}
            ]
        }).fetch() : {},
        stakingTxs: transactionsExist ? Transactions.find({
            $or: [
                {"tx.value.msg.type":"dip/MsgCreateValidator"},
                {"tx.value.msg.type":"dip/MsgEditValidator"},
                {"tx.value.msg.type":"dip/MsgDelegate"},
                {"tx.value.msg.type":"dip/MsgUndelegate"},
                {"tx.value.msg.type":"dip/MsgBeginRedelegate"}
            ]
        }).fetch() : {},
        distributionTxs: transactionsExist ? Transactions.find({
            $or: [
                {"tx.value.msg.type":"dip/MsgWithdrawValidatorCommission"},
                {"tx.value.msg.type":"dip/MsgWithdrawDelegationReward"},
                {"tx.value.msg.type":"dip/MsgModifyWithdrawAddress"}
            ]
        }).fetch() : {},
        governanceTxs: transactionsExist ? Transactions.find({
            $or: [
                {"tx.value.msg.type":"dip/MsgSubmitProposal"},
                {"tx.value.msg.type":"dip/MsgDeposit"},
                {"tx.value.msg.type":"dip/MsgVote"}
            ]
        }).fetch() : {},
        slashingTxs: transactionsExist ? Transactions.find({
            $or: [
                {"tx.value.msg.type":"dip/MsgUnjail"}
            ]
        }).fetch() : {},
        IBCTxs: transactionsExist ? Transactions.find({
            $or: [
                {"tx.value.msg.type":"dip/IBCTransferMsg"},
                {"tx.value.msg.type":"dip/IBCReceiveMsg"}
            ]
        }).fetch() : {}
    };
})(ValidatorTransactions);
