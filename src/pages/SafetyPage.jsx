
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, AlertTriangle, Users, FileText, Eye } from 'lucide-react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const SafetyPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 px-4 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left md:text-center"
          >
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Safety first, evidence by design
            </h1>
            <p className="text-sm md:text-[15px] text-slate-600 max-w-3xl mx-0 md:mx-auto">
              SELFIX governs every interaction through Adaptive Silent Mode, a risk engine tuned
              for healthcare and NDIS workloads, and a cryptographically verifiable recovery
              ledger. Staff feel supported; supervisors see the full audit trail.
            </p>

            <div className="mt-6 flex flex-col md:flex-row gap-3 md:justify-center">
              <Link
                to="/academy"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700"
              >
                View governance training
              </Link>
              <Link
                to="/trust"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                See proof & ledger model
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Adaptive Silent Mode */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-[1.3fr,1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              Adaptive Silent Mode — governance as a control plane
            </h2>
            <p className="text-sm md:text-[15px] text-slate-600 mb-4">
              Every prompt runs through the Adaptive Silent Mode engine. For each request, the
              console evaluates role, risk score and behavioural fingerprint, then selects a
              mode: Passive, Alert, Semi‑block, Full automation or Escalation. Unsafe content is
              rewritten, blocked or escalated before the user ever sees it.
            </p>

            <ul className="space-y-2 text-sm text-slate-700">
              <li>• New staff see hints and gentle corrections.</li>
              <li>• Certified staff get clean, professional output with silent risk controls.</li>
              <li>• Supervisors see the raw input, intervention reason and policy clause.</li>
              <li>• Admins see system‑level metrics, violations and trends.</li>
            </ul>

            <p className="text-xs text-slate-500 mt-4">
              Design goal: staff feel supported, not policed; governance teams keep full
              transparency and auditability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700"
          >
            <h3 className="text-sm font-semibold text-slate-900 mb-3">
              What actually happens per request
            </h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li>User input is received.</li>
              <li>Risk engine evaluates staff profile, maturity, session context and escalation history.</li>
              <li>Adaptive Mode Selector chooses Soft‑Silent, Strict‑Silent or Full transparency.</li>
              <li>Output is rewritten, logged and optionally escalated to a supervisor.</li>
              <li>Hash‑chained ledger entry is created for the event when required. </li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Risk Data Framework */}
      <section className="py-16 px-4 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
              A risk engine tuned for frontline reality
            </h2>
            <p className="text-sm md:text-[15px] text-slate-600">
              Risk is not a single number. SELFIX uses a structured data model across ten
              categories — staff maturity, session behaviour, clinical error history, client risk,
              caseload, escalation history, governance compliance, training, organisational
              triggers and feedback — to decide how strict the AI should be and when to involve
              humans.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <Activity className="h-4 w-4 text-emerald-600" />
                Staff & workload
              </h3>
              <p>
                Tenure, training hours, supervision level, weekly caseload and after‑hours work
                feed into a maturity class. High load or limited training tightens safety
                controls automatically.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                Clinical incidents & escalation
              </h3>
              <p>
                Incident severity, frequency and time since last escalation shape how quickly
                the system moves from gentle guidance to strict silent blocking and supervisor
                alerts.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <Users className="h-4 w-4 text-sky-600" />
                Client vulnerability & governance
              </h3>
              <p>
                Client complexity, NDIS level and documentation gaps influence thresholds. More
                vulnerable clients get more conservative automation, with tighter note and
                policy enforcement.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <Eye className="h-4 w-4 text-indigo-600" />
                Training & certification links
              </h3>
              <p>
                Completion of Governance Academy modules and recency of training directly affect
                Silent Mode eligibility. Overdue training flags can automatically restrict
                higher‑risk actions until staff are re‑certified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ledger, Proof & PHI safety */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-[1.1fr,1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
              Immutable recovery evidence, PHI‑safe by default
            </h2>
            <p className="text-sm md:text-[15px] text-slate-600 mb-4">
              When the system heals a component or intervenes on risky behaviour, it can write
              a hash‑chained ledger entry and generate a signed Proof‑of‑Recovery artefact.
              These proofs sit on top of your normal logs and backups, giving auditors a clean,
              tamper‑evident view of what changed, when and under which sealed policy.
            </p>
            <p className="text-sm text-slate-600">
              The Book of Forgiveness model separates rollback from forgiveness: technical
              healing happens in SELFIX; governance decisions and approvals are recorded in the
              forgiveness ledger. Proofs use PHI‑safe redactions and can be operated entirely in
              air‑gapped environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700"
          >
            <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4 text-emerald-600" />
              What goes into a proof pack?
            </h3>
            <ul className="space-y-2">
              <li>• Run ID and timeline of actions.</li>
              <li>• Component or domain identifiers affected.</li>
              <li>• Pre‑ and post‑state hashes and health scores.</li>
              <li>• Policy and approver metadata.</li>
              <li>• Cryptographic signatures linked to the ledger entry. </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* UX Layers summary */}
      <section className="py-16 px-4 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
              How safety feels for each role
            </h2>
            <p className="text-sm md:text-[15px] text-slate-600">
              The console is explicit for supervisors and administrators, and quiet for frontline
              staff. Underneath, the same governance model and Silent Mode engine apply to
              everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 text-xs md:text-sm">
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-1">New staff</h3>
              <p className="text-slate-600">
                See hints and suggested wording. Feel guided and supported while the AI quietly
                rewrites unsafe content.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-1">Level 1 certified</h3>
              <p className="text-slate-600">
                See clean output and brief reminders. Friction remains low; Silent Mode still
                corrects edge‑case risks in the background.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-1">Level 2+ certified</h3>
              <p className="text-slate-600">
                Experience a professional drafting assistant with minimal on‑screen prompts.
                Higher trust is earned through governance training and behaviour.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-1">Supervisors & admins</h3>
              <p className="text-slate-600">
                See full interventions, risk dashboards, automation modes and proofs, with the
                ability to tune rules and launch investigations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SafetyPage;
