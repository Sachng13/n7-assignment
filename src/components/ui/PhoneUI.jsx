import { PHONE_TRANSACTIONS } from '../../constants/data';

export default function PhoneUI() {
  return (
    <div style={{
      background: '#0f0f14',
      borderRadius: 32,
      width: 220,
      padding: '28px 16px 24px',
      border: '1.5px solid #2a2a3a',
      boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
      flexShrink: 0,
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, color: '#fff', fontWeight: 700,
        }}>TK</div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 10, color: '#888', letterSpacing: 0.5 }}>Toni Kross</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: -0.5 }}>$42,295.00</div>
          <div style={{ fontSize: 9, color: '#6366f1' }}>USD</div>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
        {['Fund Transfer', 'Add Money', 'More'].map(action => (
          <div key={action} style={{
            flex: 1, background: '#1a1a2e', borderRadius: 8,
            padding: '6px 4px', textAlign: 'center',
            fontSize: 8, color: '#6366f1', cursor: 'pointer',
          }}>{action}</div>
        ))}
      </div>

      {/* Activity header */}
      <div style={{ fontSize: 9, color: '#666', marginBottom: 8 }}>Recent activity</div>
      <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
        {['Day', 'Week', 'Month', '6M'].map((tab, i) => (
          <div key={tab} style={{
            fontSize: 8, padding: '3px 5px', borderRadius: 4,
            background: i === 0 ? '#6366f1' : '#1a1a2e',
            color: i === 0 ? '#fff' : '#666',
          }}>{tab}</div>
        ))}
      </div>

      {/* Transactions */}
      {PHONE_TRANSACTIONS.map((tx, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '5px 0',
          borderBottom: i < PHONE_TRANSACTIONS.length - 1 ? '1px solid #1e1e2e' : 'none',
        }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <div style={{
              width: 22, height: 22, borderRadius: '50%',
              background: tx.type === 'in' ? '#0d2e1a' : '#2e0d0d',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, color: tx.type === 'in' ? '#22c55e' : '#ef4444',
            }}>
              {tx.type === 'in' ? '↓' : '↑'}
            </div>
            <div>
              <div style={{ fontSize: 9, color: '#ccc', fontWeight: 600 }}>{tx.name}</div>
              <div style={{ fontSize: 8, color: '#666' }}>{tx.sub}</div>
            </div>
          </div>
          <div style={{ fontSize: 9, fontWeight: 700, color: tx.type === 'in' ? '#22c55e' : '#ef4444' }}>
            {tx.amount}
          </div>
        </div>
      ))}
    </div>
  );
}
