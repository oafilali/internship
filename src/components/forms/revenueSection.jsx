// src/components/forms/RevenueSection.jsx
import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const RevenueRow = ({ revenue, onRemove, onUpdate }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      {/* First Row - Main Revenue Fields */}
      <div className="grid grid-cols-7 gap-4 mb-4">
        {/* Supplier */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Supplier</label>
          <input
            type="text"
            placeholder="Enter supplier"
            value={revenue.supplier}
            onChange={(e) => onUpdate(revenue.id, 'supplier', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Total Cost */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Total Cost</label>
          <input
            type="number"
            placeholder="0.00"
            value={revenue.totalCost}
            onChange={(e) => onUpdate(revenue.id, 'totalCost', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Markup */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Markup (%)</label>
          <input
            type="number"
            placeholder="0"
            value={revenue.markup}
            onChange={(e) => onUpdate(revenue.id, 'markup', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Total Selling */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Total Selling</label>
          <input
            type="number"
            placeholder="0.00"
            value={revenue.totalSelling}
            onChange={(e) => onUpdate(revenue.id, 'totalSelling', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Profit Margin w/o Comm. */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Profit Margin w/o Comm.</label>
          <input
            type="text"
            placeholder="0%"
            value={revenue.profitMarginWithoutComm}
            onChange={(e) => onUpdate(revenue.id, 'profitMarginWithoutComm', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100"
            readOnly
          />
        </div>

        {/* Commission */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Commission (%)</label>
          <input
            type="number"
            placeholder="0"
            value={revenue.commission}
            onChange={(e) => onUpdate(revenue.id, 'commission', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Delete Button */}
        <div className="flex items-end">
          <button
            onClick={() => onRemove(revenue.id)}
            className="text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors p-2 rounded-lg"
            title="Remove this revenue row"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Second Row - Additional Fields */}
      <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-200">
        {/* Profit Margin adj for Comm. */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Profit Margin adj for Comm.</label>
          <input
            type="text"
            placeholder="0%"
            value={revenue.profitMarginAdjForComm}
            onChange={(e) => onUpdate(revenue.id, 'profitMarginAdjForComm', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100"
            readOnly
          />
        </div>

        {/* Flag */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Flag</label>
          <input
            type="text"
            placeholder="Enter flag"
            value={revenue.flag}
            onChange={(e) => onUpdate(revenue.id, 'flag', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Comm. Amount */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Comm. Amount</label>
          <input
            type="number"
            placeholder="0.00"
            value={revenue.commAmount}
            onChange={(e) => onUpdate(revenue.id, 'commAmount', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100"
            readOnly
          />
        </div>

        {/* Total Profit incl comm. */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Total Profit incl comm.</label>
          <input
            type="number"
            placeholder="0.00"
            value={revenue.totalProfitInclComm}
            onChange={(e) => onUpdate(revenue.id, 'totalProfitInclComm', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-100"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

const RevenueSection = ({ revenues, onAddRevenue, onRemoveRevenue, onUpdateRevenue }) => {
  return (
    <div className="border-t">
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">💰 Revenue Management</h3>
            <p className="text-sm text-gray-600 mt-1">Manage costs, markup, and profit calculations</p>
          </div>
          <button
            onClick={onAddRevenue}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Add Revenue Row</span>
          </button>
        </div>

        {/* Revenue Rows */}
        <div className="space-y-4">
          {revenues.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl mb-2">💰</div>
              <p className="text-lg font-medium">No revenue rows yet</p>
              <p className="text-sm">Click "Add Revenue Row" to get started</p>
            </div>
          ) : (
            revenues.map((revenue) => (
              <RevenueRow
                key={revenue.id}
                revenue={revenue}
                onRemove={onRemoveRevenue}
                onUpdate={onUpdateRevenue}
              />
            ))
          )}
        </div>

        {/* Summary Section */}
        {revenues.length > 0 && (
          <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="text-sm font-semibold text-blue-800 mb-3">Revenue Summary</h4>
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-blue-600 font-medium">Total Cost:</span>
                <div className="text-lg font-bold text-blue-800">
                  ${revenues.reduce((sum, r) => sum + (parseFloat(r.totalCost) || 0), 0).toFixed(2)}
                </div>
              </div>
              <div>
                <span className="text-blue-600 font-medium">Total Selling:</span>
                <div className="text-lg font-bold text-blue-800">
                  ${revenues.reduce((sum, r) => sum + (parseFloat(r.totalSelling) || 0), 0).toFixed(2)}
                </div>
              </div>
              <div>
                <span className="text-blue-600 font-medium">Total Commission:</span>
                <div className="text-lg font-bold text-blue-800">
                  ${revenues.reduce((sum, r) => sum + (parseFloat(r.commAmount) || 0), 0).toFixed(2)}
                </div>
              </div>
              <div>
                <span className="text-blue-600 font-medium">Total Profit:</span>
                <div className="text-lg font-bold text-green-600">
                  ${revenues.reduce((sum, r) => sum + (parseFloat(r.totalProfitInclComm) || 0), 0).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RevenueSection;